/*
 * Data Access Service Implementation
 */

const getEmployees = async function getEmployees(opts) {
  return [];
};

// This object implements the bridge interface:
// interface: {
//   getEmployees: async function(options){}
// }
module.exports = {
  getEmployees: getEmployees
};
