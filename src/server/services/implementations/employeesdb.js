/*
 * Data Access Service Implementation
 */

function getEmployees(opts, callback) {
  callback([]);
}

// This object implements the bridge interface:
// interface: {
//   getEmployees: function(options, callback){}
// }
module.exports = {
	getEmployees: getEmployees
};