import { User } from '../models/User'; // Path to your User type/interface

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
