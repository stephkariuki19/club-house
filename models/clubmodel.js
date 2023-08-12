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

const User = mongoose.model("User", userSchema);

module.exports = User