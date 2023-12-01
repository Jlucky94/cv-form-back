const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/applications',upload.single('resume'), applicationController.createApplication);

router.get('/applications/:id', applicationController.getApplication);

module.exports = router;
