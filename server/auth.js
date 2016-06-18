const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;
const models = require('./models');
const config = require('./config');

passport.use(new Strategy({
    clientID: config.google.id,
    clientSecret: config.google.secret,
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    callbackURL: config.google.callback,
    scope: ['email']
  },
  (accessToken, refreshToken, profile, cb) => {
    let email = profile._json.email;
    models.users.findOne().where('email', email).exec(cb);
  }));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  models.users.findById(id, cb);
});

router.use(passport.initialize());
router.use(passport.session());

router.get('/auth/google',
  passport.authenticate('google'));

router.get('/auth/google/callback',
  passport.authenticate('google', { successReturnToOrRedirect: '/admin/', failureRedirect: '/' })
);

module.exports = router;
