const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message-controller');

// Import the authentication middleware to ensure the user is logged in
const ensureAuthenticated = require('./middleware/auth');

// GET message form page
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('message-form');
});

router.post('/', ensureAuthenticated, messageController.createMessage);

module.exports = router;
