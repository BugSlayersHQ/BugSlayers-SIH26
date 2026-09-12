import { Request, Response, NextFunction } from 'express';

export const adminController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      message: 'Admin endpoint placeholder',
    });
  } catch (error) {
    return next(error);
  }
};
