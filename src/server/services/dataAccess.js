/*
 * Data Access Service Abstraction
 */

const implementationModule = require('../../../config').dal.module;

// eslint-disable-next-line import/no-dynamic-require
const dal = require(`./${implementationModule}`);

const getCustomerDetails = async function getCustomerDetails(id) {
  try {
    const data = await dal.getCustomer(id);

    // Customer not exist
    if (data === undefined) {
      return {
        success: true,
        noDataFound: true
      };
    }

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

const getCustomers = async function getCustomers(opts) {
  const params = {
    count: Number.isNaN(Number(opts.count)) ? 20 : Number(opts.count),
    page:
      Number.isNaN(Number(opts.page)) || opts.page < 1 ? 1 : Number(opts.page),
    sortBy: opts.sortBy,
    order: opts.order || 'ASC',
    filters: opts.filters || {}
  };

  try {
    const data = await dal.getCustomers(params);
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

const getEmployees = async function getEmployees(opts) {
  const params = {
    count: Number.isNaN(Number(opts.count)) ? 20 : Number(opts.count),
    page:
      Number.isNaN(Number(opts.page)) || opts.page < 1 ? 1 : Number(opts.page),
    sortBy: opts.sortBy,
    order: opts.order || 'ASC',
    filters: opts.filters || {}
  };

  try {
    const data = await dal.getEmployees(params);
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
//   getCustomerDetails: async function(customerId){}
//   getCustomers: async function(options){}
//   getEmployees: async function(options){}
// }
module.exports = {
  getCustomerDetails,
  getCustomers,
  getEmployees
};
