import type { NextFunction, Request, Response } from 'express';
import Api500Error from '../errors/api500Error';
import { uploadFile as backblazeUpload } from '../utils/backblaze';

const fileUploadController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await backblazeUpload(req.file.buffer, 'image/jpg');

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export default fileUploadController;
