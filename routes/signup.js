const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-up');
});

router.post('/', userController.createUser)

module.exports = router;
