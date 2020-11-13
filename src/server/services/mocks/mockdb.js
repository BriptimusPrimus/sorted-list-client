const { getEmployees } = require('./employees');

// This object implements the bridge interface:
// interface: {
//   getEmployees: async function(options){}
// }
module.exports = {
  getEmployees
};
