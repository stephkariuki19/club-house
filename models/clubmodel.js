const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
    username: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 1,
        maxlength: 100,
      },
      email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        minlength: 3,
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
      },
      is_member: {
        type: Boolean,
        default: false,
      },
      is_admin: {
        type: Boolean,
        default: false,
      },
    
});

const messageSchema = Schema(
    {
      title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: 1,
      },
      message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: 1,
      },
      author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'Author is required'],
      },
    },
    // Add the timestamps option here
    { timestamps: true }
  );
  

const User = mongoose.model("User", userSchema);
const Message = mongoose.model("Message", messageSchema);

module.exports = User,Message