import multer from 'multer';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (_req, _file, cb) => {
    cb(null, Date.now() + '-' + _file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
