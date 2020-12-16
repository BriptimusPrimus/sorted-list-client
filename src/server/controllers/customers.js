/*
 * customers Controller
 */

const dataAccess = require('../services/dataAccess');

const getCustomers = async function getCustomers(req, res, next) {
  const opts = {
    count: req.query.count,
    page: req.query.page,
    sortBy: req.query.sort,
    order: req.query.order
  };

  try {
    const response = await dataAccess.getCustomers(opts);
    if (response.success && response.data) {
      res.status(200).json({
        customers: response.data
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

const getCustomerDetails = async function getCustomerDetails(req, res, next) {
  const id = req.params.id || req.query.id;
  try {
    const response = await dataAccess.getCustomerDetails(id);
    if (response.success && response.data) {
      res.status(200).json({
        customerDetails: response.data
      });
      return;
    }

    if (response.success && response.noDataFound) {
      res.status(404).json({});
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
  getCustomers,
  getCustomerDetails
};
