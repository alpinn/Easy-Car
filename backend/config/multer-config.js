import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

export const deleteImage = (filename) => {
  const imagePath = path.join(__dirname, '..', 'images', filename);

  // Check if the file exists before attempting to delete it
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${filename} does not exist`);
      return;
    }

    // Delete the file
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`File ${filename} deleted successfully`);
      }
    });
  });
};

export default upload;