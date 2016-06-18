const path = require('path');
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/teq', (req, res)  => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'teq.html'))
});

router.get('/admin', ensureLoggedIn('/'), (req, res) => {
  console.log(req.user);
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'admin.html'))
});

router.get('/', (req, res) => {
  res.redirect('/auth/google')
});

module.exports = router;
