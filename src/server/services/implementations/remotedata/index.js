const { getEmployees } = require('./employeesdb');

const getCustomers = () => {};

// This object implements the bridge interface:
// interface: {
//   getCustomers: async function(options){}
//   getEmployees: async function(options){}
// }
module.exports = {
  getCustomers,
  getEmployees
};
