const express = require('express');
const router = express.Router();

// Register
router.post('/register', (req, res, next) => {
  res.send('register user');
});

router.post('/authenticate', (req, res, next) => {
  res.send('authenticate user');
});

router.get('/profile', (req, res, next) => {
  res.send('user profile');
});

module.exports = router;
