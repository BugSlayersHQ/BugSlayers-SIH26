import express from 'express';
import { protect, authorize } from '../middleware/auth.middleware.js';
import { createUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create', protect, authorize('ADMIN'), createUser);

export default router;
