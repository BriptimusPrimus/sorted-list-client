/*
 * employees Controller
 */

var dataAccess = require('../services/dataAccess');

function getList(req, res, next) {
  var opts = {
    count: req.query.count,
    page: req.query.page,
    sortBy: req.query.sort,
    order: req.query.order
  };

  dataAccess.getEmployees(opts, function(err, data) {
    if (err) {
      return next(err);
    }

    res.status(200);
    res.json({
      list: data
    });
  });
}

module.exports = {
  getList: getList
}