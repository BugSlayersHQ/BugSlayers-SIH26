import { Router } from 'express';

const healthRouter = Router();

healthRouter.get('/health', (_req, res, next) => {
  try {
    res.json({
      success: true,
      data: {
        status: 'ok',
      },
    });
  } catch (error) {
    return next(error);
  }
});

export default healthRouter;
