const path = require('path');
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

function isAuthenticated(req, res, next) {
  if(req.isUnauthenticated()) return next();

  res.redirect('/admin/');
}

router.get('/teq', (req, res)  => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'teq.html'))
});

router.get('/admin', ensureLoggedIn('/'), (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'admin.html'))
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/', isAuthenticated, (req, res) => {
  res.redirect('/auth/google')
});

module.exports = router;
