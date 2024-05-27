const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addImage } = require('../controllers/controllerImagePost.js');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/images', upload.single('image'), addImage);

module.exports = router;
