import { Request, Response, NextFunction } from 'express';
import { getAuth, clerkClient } from '@clerk/express';
import { AppError } from '../types/error.types.js';
import { Role } from '../types/auth.type.js';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Protect middleware called');
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated || !userId) {
      const error: AppError = new Error('Unauthorized');
      error.statusCode = 401;
      return next(error);
    }

    req.userId = userId;

    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const authorize = (...allowedRoles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Authorize middleware called');
      const user = await clerkClient.users.getUser(req.userId as string);

      const role = user.publicMetadata.role as Role;

      if (!allowedRoles.includes(role)) {
        const error: AppError = new Error('Forbidden');
        error.statusCode = 403;
        return next(error);
      }

      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
};
