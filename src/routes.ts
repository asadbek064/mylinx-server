import 'dotenv/config';
import express from 'express';
import fileUploadController from './controller/fileUploadController';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('mylinx-server online.');
});

router.get('/upload/image', fileUploadController);

export default router;
