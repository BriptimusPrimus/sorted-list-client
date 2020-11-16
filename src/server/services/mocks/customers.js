/*
 * Data Access Mock Service
 */

const fs = require('fs');
const util = require('util');
const path = require('path');
const conf = require('../../../../config');

const readFile = util.promisify(fs.readFile);
const CUSTOMERS_FILE_PATH = path.join(
  __dirname,
  conf.dal.datasources.customers.file
);
const ADDRESSES_FILE_PATH = path.join(
  __dirname,
  conf.dal.datasources.addresses.file
);

const readFromFile = async function readFromFile(filePath) {
  const data = await readFile(filePath, 'utf8');
  const obj = JSON.parse(data);
  return (obj && obj.rows) || [];
};

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

const customerMapFields = function customerMapFields(obj) {
  return {
    id: obj.customer_id,
    firstName: obj.first_name,
    surname: obj.last_name,
    email: obj.email,
    addressId: obj.address_id,
    isActive: obj.active === 1,
    createDate: obj.create_date,
    lastUpdate: obj.last_update
  };
};

const addressMapFields = function addressMapFields(obj) {
  return {
    addressId: obj.address_id,
    address: obj.address,
    address2: obj.address2,
    district: obj.district,
    city: obj.city,
    country: obj.country,
    postalCode: obj.postal_code,
    phone: obj.phone,
    addressLastUpdate: obj.last_update
  };
};

const pickFields = function pickFields(list) {
  return list.map(customerMapFields);
};

const getCustomer = async function getCustomer(customerId) {
  // Test failure scenario
  if (customerId === 0) {
    throw new Error('Mock DAL error');
  }

  try {
    const customers = await readFromFile(CUSTOMERS_FILE_PATH);
    const customer = customers.find(cust => cust.customer_id === customerId);
    // Customer not exist
    if (customer === undefined) {
      return undefined;
    }

    const addresses = await readFromFile(ADDRESSES_FILE_PATH);
    const address = addresses.find(
      addr => addr.address_id === customer.address_id
    );
    return {
      ...customerMapFields(customer),
      ...addressMapFields(address)
    };
  } catch (err) {
    throw new Error('Mock DAL error');
  }
};

const getCustomers = async function getCustomers(opts) {
  // Test failure scenario
  if (opts.sortBy === 'forceServiceError') {
    throw new Error('Mock DAL error');
  }

  try {
    const list = await readFromFile(CUSTOMERS_FILE_PATH);
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
//   getCustomer: async function(customerId){}
//   getCustomers: async function(options){}
// }
module.exports = {
  getCustomer,
  getCustomers
};
