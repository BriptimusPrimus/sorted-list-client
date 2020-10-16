const express = require('express');

const app = express();
require('./src/server/middleware/init')(app);

module.exports = app;
