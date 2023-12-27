import type { Request } from 'express';
import multer from 'multer';

// Multer storage configuration
/* const storage = multer.diskStorage({
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
}); */

// Multer storage configuration using MemoryStorage
const storage = multer.memoryStorage();

// File filter function to allow only certain file types
const fileFilter = (_req: Request, file: Express.Multer.File, cb: any) => {
  // Check file types allowed (for example, only allow JPEG and PNG)
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/heic' ||
    file.mimetype === 'image/webp' ||
    file.mimetype === 'image/gif' ||
    file.mimetype === 'image/avif' ||
    file.mimetype ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    file.mimetype === 'application/vnd.ms-excel'
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        'Invalid file type. Only JPEG, PNG, HEIC, WEBP and AVIF files are allowed.'
      )
    );
  }
};

// Multer upload instance with configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB file size limit
  },
});

// Middleware function to handle file upload
export const fileUploadValidation = upload.single('file');
