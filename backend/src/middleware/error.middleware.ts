import { Request, Response, NextFunction } from 'express';
import { AppError } from '../types/error.types.js';

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  const message = err.message || 'Internal Server Error';
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message,
  });
};
