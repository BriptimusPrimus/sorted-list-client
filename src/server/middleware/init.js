const morganLogger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const routes = require('../routes/index');

module.exports = function init(app) {
  // serve static files
  app.use(express.static(path.join(__dirname, '../../../dist')));

  app.use(morganLogger('dev'));
  // parse application/json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Allow CORS
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

  // Load all routes
  app.use('/api', routes);

  // Load page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'));
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    console.log('');
    console.log('*********************************');
    console.log('req.url:', req.url);
    console.log('*********************************');
    console.log('');
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development (and test/mock) error handler
  // will print stacktrace
  if (app.get('env') === 'development' || app.get('env') === 'test') {
    app.use(function (err, req, res, next) {
      console.error('########## ERROR ##########', err);
      console.error(err.stack);

      res.status(err.status || 500);
      res.json({
        errMessage: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    console.error('########## ERROR ##########', err);

    res.status(err.status || 500);
    res.json({
      errMessage: err.message,
      error: {}
    });
  });
};
