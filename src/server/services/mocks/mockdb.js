const { getEmployees } = require('./employees');
const { getCustomers } = require('./customers');

// This object implements the bridge interface:
// interface: {
//   getCustomers: async function(options){}
//   getEmployees: async function(options){}
// }
module.exports = {
  getCustomers,
  getEmployees
};
