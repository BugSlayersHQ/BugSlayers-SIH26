import cors from 'cors';
import express from 'express';
import healthRouter from './routes/health.route.js';

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.use('/api', healthRouter);
