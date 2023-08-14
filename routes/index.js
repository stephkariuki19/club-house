const express = require('express');
const router = express.Router();
const Messages = require('../models/messageModel')

/* GET home page. 
   router.get('/', async function(req, res, next) {
  try {
    // Fetch all items from the database using await and async
    const items = await Storeitems.find({}, 'categoryName categoryDescription quantity subCategoryName divisionName divisions');

    // Pass the data to the EJS template
    res.render('bakerypage', { title: 'Bakery', items: items });
  } catch (err) {
    next(err);
  }
});
*/
router.get('/', async function(req, res, next) {
  try {
    const messages = await Messages.find({}, 'title message');
    res.render('index', { title: 'Express', messages: messages });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
