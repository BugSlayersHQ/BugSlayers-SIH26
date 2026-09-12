import { Request, Response, NextFunction } from 'express';
import { clerkClient } from '@clerk/express';

import { prisma } from '../lib/prisma.js';
import { AppError } from '../types/error.types.js';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone } = req.body;

    if (!email) {
      const error: AppError = new Error('Email is required');
      error.statusCode = 400;
      return next(error);
    }

    const clerkAdminId = req.userId;

    if (!clerkAdminId) {
      const error: AppError = new Error('Unauthorized');
      error.statusCode = 401;
      return next(error);
    }

    const admin = await prisma.admin.findUnique({
      where: {
        clerkUserId: clerkAdminId,
      },
    });

    if (!admin) {
      const error: AppError = new Error('Admin not found');
      error.statusCode = 404;
      return next(error);
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      const error: AppError = new Error('User already exists');
      error.statusCode = 409;
      return next(error);
    }

    const redirectUrl = process.env.FRONTEND_URL
      ? `${process.env.FRONTEND_URL}/login`
      : 'http://localhost:3000/login';

    // Create and send an official invitation email via Clerk
    const invitation = await clerkClient.invitations.createInvitation({
      emailAddress: email,
      redirectUrl,

      publicMetadata: {
        role: 'USER',
        name: name || '',
        phone: phone || '',
        adminId: admin.id,
      },

      notify: true,
      ignoreExisting: false,
    });
    return res.status(201).json({
      message: 'Invitation sent successfully via Clerk email',
      invitation,
    });
  } catch (error: unknown) {
    console.error('Error creating user invitation:', error);

    const err = error as {
      errors?: Array<{ longMessage?: string; message?: string }>;
      message?: string;
      status?: number;
    };

    const message =
      err?.errors?.[0]?.longMessage ||
      err?.errors?.[0]?.message ||
      err?.message ||
      'Failed to create user invitation';
    const statusCode = err?.status || 500;

    const appError: AppError = new Error(message);
    appError.statusCode = statusCode;

    return next(appError);
  }
};
