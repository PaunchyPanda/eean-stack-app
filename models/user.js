const bcrypt = require('bcryptjs');
const client = require('../app');
const config = require('../config/database');

module.exports.index = function(user) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.body.password, salt, (err, hash) => {
      console.log(hash);
      if (err) {
        throw err;
      }
      user.body.password = hash;
      client.create(user, (err, res) => {
        // TODO: Do something with error?
      });
    });
  });
}
