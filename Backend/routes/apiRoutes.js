const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route to handle form submissions
router.post('/submit', formController.submitForm);

// Route to fetch all submissions
router.get('/submissions', formController.getAllSubmissions);

module.exports = router;
