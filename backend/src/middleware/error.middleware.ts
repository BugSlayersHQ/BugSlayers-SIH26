import { Request, Response, NextFunction } from 'express';
import { AppError } from '../types/error.types.js';

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode < 500 ? err.message || 'Client Error' : 'Internal Server Error';

  if (statusCode >= 500) {
    console.error('Unhandled Server Error:', err);
  }

  res.status(statusCode).json({
    message,
  });
};
