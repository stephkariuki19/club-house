const User = require('../models/clubmodel'); 
const Messages = require('../models/messageModel')

async function becomeMember(req, res, next) {
  try {
    const { membership } = req.body;
    if (membership === 'Odin-Project') {
      // Find the user by ID and update the is_member field
      const userId = req.user._id; // Assuming you're using Passport and have the user in req.user

      await User.updateOne({ _id: userId }, { is_member: true });
      const newMembership = req.user.is_member;

      console.log('User is now a member');
      // wont send req object too res.redirect('/non-member'); 
      //is_member not defined res.render('non-member', { is_member: true });
      const messages = await Messages.find({}, 'title message createdAt author');

      res.render('non-member', { is_member: newMembership ,messages:messages});
    } else {
      console.log('Wrong secret'); // Maybe pass a message "Access denied"
      res.redirect('/error'); // Redirect to the error page or appropriate page
    }
  } catch (err) {
    console.error(err);
    res.redirect('/error');
  }
}

module.exports = {
  becomeMember,
};
