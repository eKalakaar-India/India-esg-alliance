import { Router } from "express";
import multer from 'multer';
import { createApplications } from "./events.controllers.js";

const router = Router();

const ALLOWED_MIME = [
    'image/jpg',
    'image/jpeg',
    'image/png',
];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => {
    const ok = ALLOWED_MIME.includes(file.mimetype) && /\.(jpg|jpeg|png)$/i.test(file.originalname);
    cb(ok ? null : new Error('Transaction screenshot must be a JPG, JPEG or PNG file.'), ok);
  }
});

// POST: /api/v1/events
router.post("/", upload.single('transactionScreenshot'), createApplications);

// Handles multer errors (file too large, wrong type)
router.use((err, req, res, next) => {
  const message = err.code === 'LIMIT_FILE_SIZE' ? 'Transaction screenshot must be 5 MB or smaller.' : err.message;
  res.status(400).json({ message });
});

export default router;
