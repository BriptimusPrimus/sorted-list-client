const { getEmployees } = require('./employeesdb');

// This object implements the bridge interface:
// interface: {
//   getEmployees: async function(options){}
// }
module.exports = {
  getEmployees
};
