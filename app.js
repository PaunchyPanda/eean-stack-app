const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const elasticsearch = require('elasticsearch');
const express = require('express');
const passport = require('passport');
const path = require('path');

const client = new elasticsearch.Client(config.database);
module.exports = client;

const app = express();

const port = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//require('./config/passport')(passport);

// Route handlers
app.use('/users', require('./routes/users'));

// Index route handler
app.get('/', (req, res) => {
  res.send('run ng build in angular-src directory');
});

// Start Server
app.listen(port, () => {
  console.log('EEAN Stack Server started on port ' + port);
});
