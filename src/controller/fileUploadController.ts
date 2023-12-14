import type { NextFunction, Request, Response } from 'express';

const fileUploadController = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    // BASED ON THE TYPE UPLOAD THE FILE TO CORRECT BUCKET
    _res.status(200).json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

export default fileUploadController;
