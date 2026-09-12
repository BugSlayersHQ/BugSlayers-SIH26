import { Router } from 'express';
import { clerkWebhook } from '../controllers/webhook.controller.js';

const router = Router();

// raw body required for svix signature verification — must NOT go through express.json()
router.post('/clerk', clerkWebhook);

export default router;
