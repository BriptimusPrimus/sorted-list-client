var express = require('express');

var app = express();
require('./src/server/middleware/init')(app);

module.exports = app;
