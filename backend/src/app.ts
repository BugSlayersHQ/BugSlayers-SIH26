import cors from 'cors';
import express from 'express';
import healthRouter from './routes/health.route.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { errorMiddleware } from './middleware/error.middleware.js';
import { clerkMiddleware } from '@clerk/express';

export const app = express();

// middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api', healthRouter);

// Error handling middleware
app.use(errorMiddleware);
