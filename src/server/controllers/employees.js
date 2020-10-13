/*
 * employees Controller
 */

const dataAccess = require('../services/dataAccess');

const getList = async function getList(req, res, next) {
  const opts = {
    count: req.query.count,
    page: req.query.page,
    sortBy: req.query.sort,
    order: req.query.order
  };

  try {
    const response = await dataAccess.getEmployees(opts);
    if (response.success && response.data) {
      res.status(200).json({
        list: response.data
      });
      return;
    }

    res.status(500).json({
      errMessage: response.reason
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getList
};
