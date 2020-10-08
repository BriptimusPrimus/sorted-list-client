/*
 * Data Access Service Abstraction
 */

var implementationModule = require('../../../config').database.module;
var dal = require('./' + implementationModule);

const getEmployees = async function getEmployees(opts) {
  opts.count = isNaN(Number(opts.count)) ? 20 : Number(opts.count);
  opts.page = isNaN(Number(opts.page)) || opts.page < 1 ? 1 : Number(opts.page);
  opts.sortBy = opts.sortBy;
  opts.order = opts.order || 'ASC';
  opts.filters = opts.filters || {};

  try {
    const data = await dal.getEmployees(opts);
    return {
      success: true,
      data
    };
  } catch (err) {
    return {
      success: false,
      reason: (err && err.message) || err || ''
    };
  }
};

// This object implements the bridge interface:
// interface: {
//   getEmployees: function(options, callback){}
// }
module.exports = {
  getEmployees: getEmployees
};
