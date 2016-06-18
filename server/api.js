const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
  if(req.isAuthenticated()) res.json(req.user);
  res.status(401).end();
});

module.exports = router;
