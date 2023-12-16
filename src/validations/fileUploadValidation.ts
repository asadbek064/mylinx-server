import type { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    // Set the destination folder where files will be saved
    cb(null, path.join(process.cwd(), 'src/uploads/'));
  },
  filename: (_req, file, cb) => {
    // Rename the file if needed
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter function to allow only certain file types
const fileFilter = (_req: Request, file: Express.Multer.File, cb: any) => {
  // Check file types allowed (for example, only allow JPEG and PNG)
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
  }
};

// Multer upload instance with configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Middleware function to handle file upload
export const fileUploadValidation = upload.single('file');
