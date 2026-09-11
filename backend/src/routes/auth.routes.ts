import { Router } from 'express';
import { completeAdminSignup } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/complete-signup', protect, completeAdminSignup);

export default router;
