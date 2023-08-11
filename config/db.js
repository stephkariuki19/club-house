require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('connected to MongoDB')
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;