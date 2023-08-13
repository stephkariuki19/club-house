var express = require('express');
var router = express.Router();
const memberController = require('../controllers/member-controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('member');
});

router.post('/',memberController.becomeMember)

module.exports = router;
