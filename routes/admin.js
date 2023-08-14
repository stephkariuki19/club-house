var express = require('express');
var router = express.Router();
const adminController = require('../controllers/member-controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

router.post('/',adminController.becomeAdmin)

module.exports = router;
