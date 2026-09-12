import { Request, Response, NextFunction } from 'express';
import { verifyWebhook } from '@clerk/express/webhooks';

import { prisma } from '../lib/prisma.js';
import { AppError } from '../types/error.types.js';

export const clerkWebhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const evt = await verifyWebhook(req);
    console.log(`Clerk webhook received: ${evt.type}`);

    const data = evt.data as any;

    switch (evt.type) {
      case 'user.created': {
        const clerkUserId = data.id as string;
        const publicMetadata = (data.public_metadata || {}) as Record<string, any>;
        const role = publicMetadata.role;

        const primaryEmail =
          data.email_addresses && data.email_addresses.length > 0
            ? (data.email_addresses[0].email_address as string)
            : null;

        // A subordinate account is only ever created when BOTH conditions hold:
        // role === 'USER' AND adminId is present. Both are set exclusively by
        // our own server-side invite endpoint (clerkClient.invitations.createInvitation),
        // never by the client. A public/self-serve signup carries neither,
        // and falls through to the admin branch below.
        if (role === 'USER' && publicMetadata.adminId) {
          console.log(
            `Processing user creation for invited subordinate: ${clerkUserId} (${primaryEmail})`,
          );

          if (!primaryEmail) {
            const error: AppError = new Error('No email found for created user');
            error.statusCode = 400;
            return next(error);
          }

          const adminId = Number(publicMetadata.adminId);

          if (!Number.isFinite(adminId)) {
            const error: AppError = new Error(
              `Invalid adminId in invite metadata: ${publicMetadata.adminId}`,
            );
            error.statusCode = 400;
            return next(error);
          }

          const adminExists = await prisma.admin.findUnique({
            where: { id: adminId },
          });

          if (!adminExists) {
            const error: AppError = new Error(
              `Cannot link user: adminId ${adminId} does not exist`,
            );
            error.statusCode = 404;
            return next(error);
          }

          const name =
            publicMetadata.name ||
            [data.first_name, data.last_name].filter(Boolean).join(' ') ||
            'Invited User';

          const phone =
            publicMetadata.phone ||
            (data.phone_numbers && data.phone_numbers.length > 0
              ? (data.phone_numbers[0].phone_number as string)
              : null);

          try {
            // Upsert on clerkUserId makes this idempotent against Clerk's
            // webhook retries (it retries on any non-2xx or timeout).
            const newUser = await prisma.user.upsert({
              where: { clerkUserId },
              update: {},
              create: {
                clerkUserId,
                name,
                email: primaryEmail,
                phone: phone || null,
                adminId,
              },
            });

            console.log(`User created in database: ${newUser.id} (${newUser.email})`);

            return res.status(201).json({
              message: 'User created successfully via webhook',
              user: newUser,
            });
          } catch (err: any) {
            // Unique constraint on email — an account with this email already
            // exists (e.g. re-invited after a previous partial signup). Link
            // the existing record to this Clerk identity instead of failing.
            if (err.code === 'P2002') {
              const updatedUser = await prisma.user.update({
                where: { email: primaryEmail },
                data: { clerkUserId },
              });

              return res.status(200).json({
                message: 'User linked successfully',
                user: updatedUser,
              });
            }
            throw err;
          }
        } else {
          // No valid invite metadata → independent, self-serve signup.
          // Treat as a new tenant owner (Admin).
          console.log(`Processing self-serve admin signup: ${clerkUserId}`);

          try {
            const newAdmin = await prisma.admin.upsert({
              where: { clerkUserId },
              update: {},
              create: { clerkUserId },
            });

            console.log(`Admin created in database: ${newAdmin.id}`);

            return res.status(201).json({
              message: 'Admin created successfully',
              admin: newAdmin,
            });
          } catch (err: any) {
            if (err.code === 'P2002') {
              // Race between two retried webhook deliveries — treat as success.
              return res.status(200).json({ message: 'Admin already exists' });
            }
            throw err;
          }
        }
      }

      case 'user.updated': {
        const clerkUserId = data.id as string;
        const primaryEmail =
          data.email_addresses && data.email_addresses.length > 0
            ? (data.email_addresses[0].email_address as string)
            : undefined;

        const name = [data.first_name, data.last_name].filter(Boolean).join(' ');

        // A clerkUserId belongs to exactly one of User or Admin — check both,
        // since we don't know from the event alone which table it lives in.
        const user = await prisma.user.findUnique({ where: { clerkUserId } });

        if (user) {
          await prisma.user.update({
            where: { clerkUserId },
            data: {
              ...(primaryEmail ? { email: primaryEmail } : {}),
              ...(name ? { name } : {}),
            },
          });
          console.log(`User updated in database: ${user.id}`);
        } else {
          const admin = await prisma.admin.findUnique({ where: { clerkUserId } });
          if (admin) {
            // Admin model currently only stores clerkUserId — nothing to sync
            // yet. If you add name/email fields to Admin, mirror the update
            // here the same way as the User branch above.
            console.log(`Admin ${admin.id} updated in Clerk (no local fields to sync)`);
          } else {
            console.log(`user.updated received for unknown clerkUserId: ${clerkUserId}`);
          }
        }

        return res.status(200).json({
          message: 'Webhook processed successfully',
        });
      }

      case 'user.deleted': {
        const clerkUserId = data.id as string;

        if (clerkUserId) {
          const deletedUsers = await prisma.user.deleteMany({
            where: { clerkUserId },
          });

          const deletedAdmins = await prisma.admin.deleteMany({
            where: { clerkUserId },
          });

          console.log(
            `Records deleted for clerkUserId: ${clerkUserId} (users: ${deletedUsers.count}, admins: ${deletedAdmins.count})`,
          );
        }

        return res.status(200).json({
          message: 'Webhook processed successfully',
        });
      }

      default: {
        console.log(`Unhandled Clerk webhook event: ${evt.type}`);
        return res.status(200).json({
          message: 'Webhook received successfully',
        });
      }
    }
  } catch (error) {
    console.error('Error processing Clerk webhook:', error);
    next(error);
  }
};
