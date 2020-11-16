const { getEmployees } = require('./employees');
const { getCustomer, getCustomers } = require('./customers');

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
