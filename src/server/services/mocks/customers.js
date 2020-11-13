/*
 * Data Access Mock Service
 */

const fs = require('fs');
const util = require('util');
const path = require('path');
const conf = require('../../../../config');

const readFile = util.promisify(fs.readFile);
const FILE_PATH = path.join(__dirname, conf.dal.datasources.customers.file);

const mapFields = function mapFields() {
  return {
    id: 'customer_id',
    firstName: 'first_name',
    surname: 'last_name',
    email: 'email',
    addressId: 'address_id',
    isActive: 'active',
    createDate: 'create_date',
    lastUpdate: 'last_update'
  };
};

const readFromFile = async function readFromFile() {
  const data = await readFile(FILE_PATH, 'utf8');
  const obj = JSON.parse(data);
  return (obj && obj.rows) || [];
};

const sort = function sort(rows, opts) {
  if (!opts.sortBy) {
    return rows.concat([]);
  }

  const sortBy = mapFields()[opts.sortBy];
  if (!sortBy) {
    return rows.concat([]);
  }

  const ord = opts.order === 'DESC' ? -1 : 1;
  const result = rows.concat([]);
  result.sort(function sortRule(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1 * ord;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1 * ord;
    }
    return 0;
  });
  return result;
};

const extractChunk = function extractChunk(rows, opts) {
  const i = (opts.page - 1) * opts.count;
  const j = i + opts.count;
  return rows.slice(i, j);
};

const pickFields = function pickFields(list) {
  return list.map(customer => ({
    id: customer.customer_id,
    firstName: customer.first_name,
    surname: customer.last_name,
    email: customer.email,
    addressId: customer.address_id,
    isActive: customer.active === 1,
    createDate: customer.create_date,
    lastUpdate: customer.last_update
  }));
};

const getCustomers = async function getCustomers(opts) {
  // Test failure scenario
  if (opts.sortBy === 'forceServiceError') {
    throw new Error('Mock DAL error');
  }

  try {
    const list = await readFromFile();
    const sortedList = sort(list, opts);
    const chunk = extractChunk(sortedList, opts);
    const resultChunk = pickFields(chunk);
    return resultChunk;
  } catch (err) {
    throw new Error('Mock DAL error');
  }
};

// This object implements the bridge interface:
// interface: {
//   getCustomer: async function(options){}
//   getCustomers: async function(options){}
// }
module.exports = {
  getCustomers
};
