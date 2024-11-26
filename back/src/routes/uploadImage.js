const express = require('express');
const multer = require('multer');
const router = express.Router();
// const verifyToken = require('../middleware/jwt');

const {
  uploadImage,
  getAllImages,
  getImageById,
} = require('../controllers/UploadController');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('image'), uploadImage);
router.get('/:curriculumId', getImageById);
router.get('/', getAllImages);
module.exports = router;
