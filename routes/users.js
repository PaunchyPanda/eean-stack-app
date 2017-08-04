const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const User = require('../models/user');

// Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('authenticate user');
});

// Register
router.post('/register', (req, res, next) => {
  let newUser = {
    index: 'coeus',
    type: 'user',
    id: uuid(),
    body: {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }
  }
  User.index(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: false, msg: 'Registered user' });
    }
  });
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('user profile');
});

module.exports = router;
