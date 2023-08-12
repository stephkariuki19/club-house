const express = require('express');
const router = express.Router();
const passport = require('passport'); // Require passport for authentication
const bcrypt = require('bcrypt'); // Require bcrypt for password hashing
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/clubmodel')

// GET login page
router.get('/', function(req, res, next) {
  res.render('log-in');
});

//1.Setting up Local strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
//2,3. sessions and serializations
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
// POST login
router.post('/', passport.authenticate('local', {
  successRedirect: '/non-member',
  failureRedirect: '/',
}));

module.exports = router;
