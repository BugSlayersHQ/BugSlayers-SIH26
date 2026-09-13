import { Request, Response, NextFunction } from 'express';
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { clerkClient } from '@clerk/express';

import { prisma } from '../lib/prisma.js';
import { s3, storageBucket } from '../lib/storage.js';
import { AppError } from '../types/error.types.js';

// ─── Upload File ────────────────────────────────────────────────────────────
// POST /api/files/create  (Admin only)
export const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      const error: AppError = new Error('File is required');
      error.statusCode = 400;
      return next(error);
    }

    const user = await prisma.user.findUnique({
      where: { clerkUserId: req.userId },
    });

    if (!user) {
      const error: AppError = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }

    const uniqueFileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${req.file.originalname}`;
    const storageKey = `land-records/${uniqueFileName}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: storageBucket,
        Key: storageKey,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      }),
    );

    const file = await prisma.file.create({
      data: {
        originalName: req.file.originalname,
        fileName: uniqueFileName,
        mimeType: req.file.mimetype,
        size: req.file.size,
        storageKey,
        uploadedById: user.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'File uploaded successfully',
      data: file,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Get All Files ───────────────────────────────────────────────────────────
// GET /api/files  (Admin only)
export const getAllFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const files = await prisma.file.findMany({
      include: {
        uploadedBy: {
          select: { id: true, name: true, email: true },
        },
        assignments: {
          include: {
            user: {
              select: { id: true, clerkUserId: true, name: true, email: true },
            },
            assigner: {
              select: { id: true, name: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json({
      success: true,
      message: 'Files fetched successfully',
      data: files,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Get File By ID ──────────────────────────────────────────────────────────
// GET /api/files/:id  (Authenticated)
export const getFileById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);

    if (Number.isNaN(fileId)) {
      const error: AppError = new Error('Invalid file ID');
      error.statusCode = 400;
      return next(error);
    }

    const file = await prisma.file.findUnique({
      where: { id: fileId },
      include: {
        uploadedBy: {
          select: { id: true, name: true, email: true },
        },
        assignments: {
          include: {
            user: {
              select: { id: true, clerkUserId: true, name: true, email: true },
            },
            assigner: {
              select: { id: true, name: true },
            },
          },
        },
      },
    });

    if (!file) {
      const error: AppError = new Error('File not found');
      error.statusCode = 404;
      return next(error);
    }

    return res.status(200).json({
      success: true,
      message: 'File fetched successfully',
      data: file,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Update File ─────────────────────────────────────────────────────────────
// PATCH /api/files/:id  (Admin only)
// Note: Supports metadata update only (originalName). File replacement is not
// implemented in this version. See docs/FILE_MANAGEMENT.md for details.
export const updateFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);

    if (Number.isNaN(fileId)) {
      const error: AppError = new Error('Invalid file ID');
      error.statusCode = 400;
      return next(error);
    }

    const existingFile = await prisma.file.findUnique({
      where: { id: fileId },
    });

    if (!existingFile) {
      const error: AppError = new Error('File not found');
      error.statusCode = 404;
      return next(error);
    }

    const { originalName } = req.body as { originalName?: string };

    const file = await prisma.file.update({
      where: { id: fileId },
      data: {
        ...(originalName && { originalName }),
      },
    });

    return res.status(200).json({
      success: true,
      message: 'File updated successfully',
      data: file,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Delete File ─────────────────────────────────────────────────────────────
// DELETE /api/files/:id  (Admin only)
export const deleteFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);

    if (Number.isNaN(fileId)) {
      const error: AppError = new Error('Invalid file ID');
      error.statusCode = 400;
      return next(error);
    }

    const file = await prisma.file.findUnique({
      where: { id: fileId },
    });

    if (!file) {
      const error: AppError = new Error('File not found');
      error.statusCode = 404;
      return next(error);
    }

    // Delete from R2 first, then remove the database record
    await s3.send(
      new DeleteObjectCommand({
        Bucket: storageBucket,
        Key: file.storageKey,
      }),
    );

    // FileAssignment rows are deleted automatically via onDelete: Cascade
    await prisma.file.delete({ where: { id: fileId } });

    return res.status(200).json({
      success: true,
      message: 'File deleted successfully',
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Assign File ─────────────────────────────────────────────────────────────
// POST /api/files/:id/assign  (Admin only)
export const assignFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);
    const { userId } = req.body as { userId?: number | string };

    if (Number.isNaN(fileId)) {
      const error: AppError = new Error('Invalid file ID');
      error.statusCode = 400;
      return next(error);
    }

    if (!userId) {
      const error: AppError = new Error('User ID is required');
      error.statusCode = 400;
      return next(error);
    }

    const targetUserId = Number(userId);
    if (Number.isNaN(targetUserId)) {
      const error: AppError = new Error('Invalid user ID');
      error.statusCode = 400;
      return next(error);
    }

    const file = await prisma.file.findUnique({ where: { id: fileId } });

    if (!file) {
      const error: AppError = new Error('File not found');
      error.statusCode = 404;
      return next(error);
    }

    const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });

    if (!targetUser) {
      const error: AppError = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }

    const assigner = await prisma.user.findUnique({ where: { clerkUserId: req.userId } });

    if (!assigner) {
      const error: AppError = new Error('Assigner not found');
      error.statusCode = 404;
      return next(error);
    }

    const existingAssignment = await prisma.fileAssignment.findUnique({
      where: { fileId_userId: { fileId, userId: targetUserId } },
    });

    if (existingAssignment) {
      const error: AppError = new Error('File already assigned to this user');
      error.statusCode = 409;
      return next(error);
    }

    const assignment = await prisma.fileAssignment.create({
      data: {
        fileId,
        userId: targetUserId,
        assignedBy: assigner.id,
      },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        assigner: {
          select: { id: true, name: true },
        },
      },
    });

    return res.status(201).json({
      success: true,
      message: 'File assigned successfully',
      data: assignment,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Remove File Assignment ───────────────────────────────────────────────────
// DELETE /api/files/:id/assign/:userId  (Admin only)
export const removeFileAssignment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);
    const userId = Number(req.params.userId);

    if (Number.isNaN(fileId) || Number.isNaN(userId)) {
      const error: AppError = new Error('Invalid file ID or user ID');
      error.statusCode = 400;
      return next(error);
    }

    const assignment = await prisma.fileAssignment.findUnique({
      where: { fileId_userId: { fileId, userId } },
    });

    if (!assignment) {
      const error: AppError = new Error('File assignment not found');
      error.statusCode = 404;
      return next(error);
    }

    await prisma.fileAssignment.delete({
      where: { fileId_userId: { fileId, userId } },
    });

    return res.status(200).json({
      success: true,
      message: 'File assignment removed successfully',
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Get File Assignments ─────────────────────────────────────────────────────
// GET /api/files/:id/assignments  (Authenticated)
// ADMINs see all assignments; normal USERs only see their own assignment on the file.
export const getFileAssignments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);

    if (Number.isNaN(fileId)) {
      const error: AppError = new Error('Invalid file ID');
      error.statusCode = 400;
      return next(error);
    }

    // Determine the caller's role via Clerk
    const clerkUser = await clerkClient.users.getUser(req.userId as string);
    const role = clerkUser.publicMetadata.role as string | undefined;

    const whereClause =
      role === 'ADMIN'
        ? { fileId }
        : (() => {
            // For normal users, restrict to only their own assignment on this file
            return { fileId, user: { clerkUserId: req.userId } };
          })();

    const assignments = await prisma.fileAssignment.findMany({
      where: whereClause,
      include: {
        user: {
          select: { id: true, clerkUserId: true, name: true, email: true },
        },
        assigner: {
          select: { id: true, name: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json({
      success: true,
      message: 'File assignments fetched successfully',
      data: assignments,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Get User Files ───────────────────────────────────────────────────────────
// GET /api/files/user/:userId  (Authenticated)
// ADMIN: can view any user's files.
// USER: can only view their own files.
export const getUserFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.userId);

    if (Number.isNaN(userId)) {
      const error: AppError = new Error('Invalid user ID');
      error.statusCode = 400;
      return next(error);
    }

    // Resolve the authenticated Prisma user
    const caller = await prisma.user.findUnique({ where: { clerkUserId: req.userId } });

    if (!caller) {
      const error: AppError = new Error('Authenticated user not found');
      error.statusCode = 404;
      return next(error);
    }

    // Check caller's role for authorization
    const clerkUser = await clerkClient.users.getUser(req.userId as string);
    const role = clerkUser.publicMetadata.role as string | undefined;

    // Non-admin users may only access their own files
    if (role !== 'ADMIN' && caller.id !== userId) {
      const error: AppError = new Error("You are not allowed to access another user's files");
      error.statusCode = 403;
      return next(error);
    }

    // Confirm the target user exists
    const targetUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!targetUser) {
      const error: AppError = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }

    const assignments = await prisma.fileAssignment.findMany({
      where: { userId },
      include: {
        file: {
          include: {
            uploadedBy: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json({
      success: true,
      message: 'User files fetched successfully',
      data: assignments,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// ─── Download File ─────────────────────────────────────────────────────────────
// GET /api/files/:id/download  (Authenticated)
// ADMIN: always allowed.
// USER: only allowed if assigned to the file.
export const downloadFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const fileId = Number(req.params.id);

    if (Number.isNaN(fileId)) {
      const error: AppError = new Error('Invalid file ID');
      error.statusCode = 400;
      return next(error);
    }

    const file = await prisma.file.findUnique({ where: { id: fileId } });

    if (!file) {
      const error: AppError = new Error('File not found');
      error.statusCode = 404;
      return next(error);
    }

    // Resolve caller's role
    const clerkUser = await clerkClient.users.getUser(req.userId as string);
    const role = clerkUser.publicMetadata.role as string | undefined;

    if (role !== 'ADMIN') {
      // Resolve the authenticated Prisma user to check assignment
      const caller = await prisma.user.findUnique({ where: { clerkUserId: req.userId } });

      if (!caller) {
        const error: AppError = new Error('Authenticated user not found');
        error.statusCode = 404;
        return next(error);
      }

      const assignment = await prisma.fileAssignment.findUnique({
        where: { fileId_userId: { fileId, userId: caller.id } },
      });

      if (!assignment) {
        const error: AppError = new Error('You are not allowed to download this file');
        error.statusCode = 403;
        return next(error);
      }
    }

    const command = new GetObjectCommand({
      Bucket: storageBucket,
      Key: file.storageKey,
      ResponseContentDisposition: `attachment; filename="${file.originalName}"`,
      ResponseContentType: file.mimeType,
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 300 });

    return res.status(200).json({
      success: true,
      message: 'Download URL generated successfully',
      data: {
        url,
        expiresIn: 300,
      },
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
