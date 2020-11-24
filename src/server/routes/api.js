/*
 * Routes
 */

const express = require('express');
const customersController = require('../controllers/customers');
const employeesController = require('../controllers/employees');

const router = express.Router();

/* GET dummy data. */
router.get('/', function dummy(req, res) {
  res.status(200);
  res.json({
    data: 'Hello World!'
  });
});

router.get('/customer/:id', customersController.getCustomerDetails);

router.get('/customers', customersController.getCustomers);

router.get('/employees', employeesController.getList);

module.exports = router;
