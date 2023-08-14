const express = require('express');
const router = express.Router();
const Messages = require('../models/messageModel')
const User = require('../models/clubmodel'); 

router.get('/', async function(req, res, next) {
  try {
    const userMemberStatus = req.user.is_member
    console.log('member status')
    console.log(userMemberStatus)

    const userAdminStatus = req.user.is_admin
    console.log('admin status')
    console.log(userAdminStatus)

    const messages = await Messages.find({}, 'title message createdAt author').populate('author','username');
    res.render('non-member', { is_member: userMemberStatus,messages: messages,is_admin:userAdminStatus });
  } catch (err) {
    next(err);
  }
});

router.delete('/delete-message/:id', async function(req, res, next) {
  try {
      const messageId = req.params.id;
      await Messages.findByIdAndDelete(messageId);
      res.redirect('/non-member');
  } catch (err) {
      next(err);
  }
});

module.exports = router;
