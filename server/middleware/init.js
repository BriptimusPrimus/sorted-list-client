var morganLogger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('../routes/index');
var express = require('express');

module.exports = function init(app) {

  //serve static files
  app.use(express.static(path.join(__dirname, '../../dist')));

  app.use(morganLogger('dev'));
  // parse application/json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Load all routes
  app.use('/api', routes);

  // Load page
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  })


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development (and test/mock) error handler
  // will print stacktrace
  if (app.get('env') === 'development' || app.get('env') === 'test') {
    app.use(function(err, req, res, next) {
      console.log('########## ERROR ##########', err);
      console.log(err.stack);

      res.status(err.status || 500);
      res.json({
        errMessage: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    console.log('########## ERROR ##########', err);

    res.status(err.status || 500);
    res.json({
      errMessage: err.message,
      error: {}
    });
  });

}
