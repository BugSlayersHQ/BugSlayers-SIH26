import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { errorMiddleware } from './middleware/error.middleware.js';
import { clerkMiddleware } from '@clerk/express';

import healthRouter from './routes/health.route.js';
import adminRouter from './routes/admin.route.js';
import webhookRouter from './routes/webhook.routes.js';
import userRouter from './routes/user.route.js';

export const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.use('/api/webhooks', express.raw({ type: 'application/json' }), webhookRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api', healthRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);

// Error handling middleware
app.use(errorMiddleware);
