import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/auth.middleware.js';
import { adminController } from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/admin', protect, authorize('ADMIN'), adminController);

export default router;
