/*
 * Routes
 */

var express = require('express');
var employeesController = require('../controllers/employees');

var router = express.Router();

/* GET dummy data. */
router.get('/', function(req, res) {
  res.status(200);
  res.json({
    data: 'Hello World!'
  })
});

router.get('/employees', employeesController.getList);

module.exports = router;