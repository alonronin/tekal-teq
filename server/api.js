const express = require('express');
const router = express.Router();
const models = require('./models');

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) return next();

  res.status(401).end('Unauthorized');
}

router.get('/user', isAuthenticated, (req, res, next) => {
  res.json(req.user);
});

router.get('/users', isAuthenticated, models.users.get());
router.post('/users', isAuthenticated, models.users.post());
router.put('/users/:id', isAuthenticated, models.users.update());
router.delete('/users/:id', isAuthenticated, models.users.delete());

module.exports = router;
