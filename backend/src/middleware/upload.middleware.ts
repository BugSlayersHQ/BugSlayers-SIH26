import multer from 'multer';
import { AppError } from '../types/error.types.js';

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/tiff',
];

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB

const fileFilter: multer.Options['fileFilter'] = (_req, file, cb) => {
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    const error: AppError = new Error(
      `File type not allowed. Allowed types: ${ALLOWED_MIME_TYPES.join(', ')}`,
    );
    error.statusCode = 400;
    return cb(error as Error);
  }

  cb(null, true);
};

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
});
