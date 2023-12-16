import 'dotenv/config';
import express from 'express';
import fileUploadController from './controller/fileUploadController';
import { fileUploadValidation } from './validations/fileUploadValidation';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('mylinx-server online.');
});

router.post('/upload/image', fileUploadValidation, fileUploadController);

export default router;
