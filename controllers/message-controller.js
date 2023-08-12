const Message = require('../models/messageModel')
async function createMessage(req, res, next) {
  const { title, message } = req.body;

  try {
    if (!req.isAuthenticated()) {
      console.log('User is not authenticated'); // Handle this case, redirect to login, etc.
      return;
    }
    console.log('User is  authenticated'); // Handle this case, redirect to login, etc.
   // console.log(req)
    const newMessage = new Message({
      title: title,
      message: message,
      author: req.user._id, // Associate the author (user) with the message
    });
    await newMessage.save();
    console.log('message created');
    res.redirect('/non-member'); // Redirect to the non-member page

  } catch (err) {
    console.error(err);
    res.redirect('/error');
  }
}

module.exports = {
  createMessage,
};
