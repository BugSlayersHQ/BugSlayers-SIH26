import { Request, Response, NextFunction } from 'express';
import { clerkClient } from '@clerk/express';

import { prisma } from '../lib/prisma.js';
import { AppError } from '../types/error.types.js';

export const completeAdminSignup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.userId) {
      const error: AppError = new Error('Unauthorized');
      error.statusCode = 401;
      return next(error);
    }

    const existingAdmin = await prisma.admin.findUnique({
      where: {
        clerkUserId: req.userId,
      },
    });

    if (existingAdmin) {
      const error: AppError = new Error('Admin already exists');
      error.statusCode = 409;
      return next(error);
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkUserId: req.userId,
      },
    });

    if (existingUser) {
      const error: AppError = new Error('This account is already registered as a User');
      error.statusCode = 409;
      return next(error);
    }

    // Set ADMIN role in Clerk
    await clerkClient.users.updateUserMetadata(req.userId, {
      publicMetadata: {
        role: 'ADMIN',
      },
    });

    // Create Admin in PostgreSQL
    const admin = await prisma.admin.create({
      data: {
        clerkUserId: req.userId,
      },
    });

    return res.status(201).json({
      message: 'Admin signup completed successfully',
      admin,
    });
  } catch (error) {
    next(error);
  }
};
