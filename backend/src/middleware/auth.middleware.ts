import { getAuth } from '@clerk/express';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../types/error.types.js';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isAuthenticated } = getAuth(req);
    if (!isAuthenticated) {
      const error: AppError = new Error('Unauthorized');
      error.statusCode = 401;
      return next(error);
    }
    next();
  } catch (error) {
    return next(error);
  }
};
