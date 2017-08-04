const bodyParser = require('body-parser');
const cors = require('cors');
//const config = require('./config/database');
const elasticsearch = require('elasticsearch');
const express = require('express');
const passport = require('passport');
const path = require('path');

const app = express();

const users = require('./routes/users');

const port = 3000;

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('run ng build in angular-src directory');
});

// Start Server
app.listen(port, () => {
  console.log('EEAN Stack Server started on port ' + port);
});
