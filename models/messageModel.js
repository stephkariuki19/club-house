const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
  
const Message = mongoose.model("Message", messageSchema);
module.exports = Message