import { Request, Response, NextFunction } from 'express';
import { verifyWebhook } from '@clerk/express/webhooks';

export const clerkWebhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const evt = await verifyWebhook(req);

    console.log('Webhook event:', evt.type);

    switch (evt.type) {
      case 'user.created':
        console.log('User created:', evt.data.id);
        break;

      case 'user.updated':
        console.log('User updated:', evt.data.id);
        break;

      case 'user.deleted':
        console.log('User deleted:', evt.data.id);
        break;

      default:
        console.log(`Unhandled webhook: ${evt.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    next(error);
  }
};
