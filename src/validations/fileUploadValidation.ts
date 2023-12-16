import type { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { nanoid } from 'nanoid';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    // Set the destination folder where files will be saved
    cb(null, path.join(process.cwd(), 'src/uploads/'));
  },
  filename: (_req, _file, cb) => {
    const fileID = nanoid(10);
    const sanitizedOriginalName = _file.originalname.replace(
      /[^a-zA-Z0-9-_.]/g,
      ''
    );
    const fileName = `${fileID}-${sanitizedOriginalName}`;

    // Rename the file
    cb(null, fileName);
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
