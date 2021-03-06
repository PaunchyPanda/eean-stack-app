const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const User = require('../models/user');

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 3600 // 1 hour
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        // TODO: Don't let the user know what went wrong
        return res.json({ success: false, msg: 'Wrong password'});
      }
    });
  });
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
