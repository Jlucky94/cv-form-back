const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/applications', applicationController.createApplication);

router.get('/applications/:id', applicationController.getApplication);

module.exports = router;
