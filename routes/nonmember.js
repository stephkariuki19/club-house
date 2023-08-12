const express = require('express');
const router = express.Router();
const Messages = require('../models/messageModel')
/* GET home page. 
router.get('/', async function(req, res, next) {
  try {
    const messages = await Messages.find({}, 'title message');
    console.log(messages); // Add this line to check the fetched messages in the console
    res.render('index', { title: 'Express', messages: messages });
  } catch (err) {
    next(err);
  }
});*/
router.get('/', async function(req, res, next) {
  try {
    const messages = await Messages.find({}, 'title message');
    console.log(messages); // Add this line to check the fetched messages in the console
    res.render('non-member', { messages: messages });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
