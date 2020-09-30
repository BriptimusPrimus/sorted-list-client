/*
 * Data Access Service Abstraction
 */

var implementationModule = require('../../../config').database.module;
var dal = require('./' + implementationModule);

function getEmployees(opts, callback) {
  opts.count = isNaN(Number(opts.count)) ?
    20 : Number(opts.count);
  opts.page = isNaN(Number(opts.page)) || opts.page < 1 ?
    1 : Number(opts.page);
  opts.sortBy = opts.sortBy;
  opts.order = opts.order || 'ASC';
  opts.filters = opts.filters || {};

  dal.getEmployees(opts, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

// This object implements the bridge interface:
// interface: {
//   getEmployees: function(options, callback){}
// }
module.exports = {
	getEmployees: getEmployees
};