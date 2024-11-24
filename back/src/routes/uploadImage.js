const express = require('express');
const multer = require('multer');
const router = express.Router();
// const verifyToken = require('../middleware/jwt');

const { uploadImage } = require('../controllers/UploadController');
const upload = multer({ storage: multer.memoryStorage() });
router.post('/', upload.single('image'), uploadImage);

module.exports = router;
