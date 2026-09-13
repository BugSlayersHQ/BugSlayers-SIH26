import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.middleware.js';
import {
  uploadFile,
  getAllFiles,
  getFileById,
  updateFile,
  deleteFile,
  assignFile,
  removeFileAssignment,
  getFileAssignments,
  getUserFiles,
  downloadFile,
} from '../controllers/file.controller.js';
import { upload } from '../middleware/upload.middleware.js';

const router = Router();

// IMPORTANT: Route order matters.
// /user/:userId must appear before /:id to avoid userId being parsed as a file ID.
// /:id/download must appear before /:id.

router.post('/create', protect, authorize('ADMIN'), upload.single('file'), uploadFile);

router.get('/', protect, authorize('ADMIN'), getAllFiles);

router.get('/user/:userId', protect, getUserFiles);

router.get('/:id/download', protect, downloadFile);

router.get('/:id', protect, getFileById);

router.patch('/:id', protect, authorize('ADMIN'), updateFile);

router.delete('/:id', protect, authorize('ADMIN'), deleteFile);

router.post('/:id/assign', protect, authorize('ADMIN'), assignFile);

router.delete('/:id/assign/:userId', protect, authorize('ADMIN'), removeFileAssignment);

router.get('/:id/assignments', protect, getFileAssignments);

export default router;
