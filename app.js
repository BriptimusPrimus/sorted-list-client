var express = require('express');

var app = express();
require('./server/middleware/init')(app);

module.exports = app;
