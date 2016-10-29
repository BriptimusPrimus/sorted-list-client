/*
 * Routes
 */

var express = require('express');

var router = express.Router();

/* GET dummy data. */
router.get('/', function(req, res) {
  res.status(200);
  res.json({
    data: 'Hello World!'
  })
});

module.exports = router;