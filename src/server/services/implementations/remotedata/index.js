/*
 * Data Access Service Implementation
 */
const { getEmployees } = require('./employeesdb');
const { getCustomer, getCustomers } = require('./customersdb');

// This object implements the bridge interface:
// interface: {
//   getCustomer: async function(customerId){}
//   getCustomers: async function(options){}
//   getEmployees: async function(options){}
// }
module.exports = {
  getCustomer,
  getCustomers,
  getEmployees
};
