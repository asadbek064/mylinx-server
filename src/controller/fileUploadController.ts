import type { NextFunction, Request, Response } from 'express';
import chunk from 'lodash/chunk';
import Api500Error from '../errors/api500Error';
import { BackBlaze, uploadFile as backblazeUpload } from '../utils/backblaze';

const fileUploadController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

export default fileUploadController;
