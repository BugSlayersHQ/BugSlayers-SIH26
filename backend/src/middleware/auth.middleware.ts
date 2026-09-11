import { Request, Response, NextFunction } from 'express';
import { AppError } from '../types/error.types.js';
import { getAuth, clerkClient, User } from '@clerk/express';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated) {
      const error: AppError = new Error('Unauthorized');
      error.statusCode = 401;
      return next(error);
    }
    const user = await clerkClient.users.getUser(userId);
    req.user = user as User;

    next();
  } catch (error) {
    return next(error);
  }
};
