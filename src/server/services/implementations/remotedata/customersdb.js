/*
 * Data Access Service Implementation
 */
const conf = require('../../../../../config').dal.databases.videostore;
const { makeQuery } = require('./dbutils')(conf);

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

const fetchCustomerFromSource = async function fetchCustomersFromSource(
  customerId
) {
  const sqlQry = `
        SELECT
            u.customer_id,
            u.store_id,
            u.first_name,
            u.last_name,
            u.email,
            u.address_id,
            u.active,
            u.create_date,
            u.last_update,
            a.address,
            a.address2,
            a.district,
            a.city_id,
            i.city,
            i.country_id,
            o.country,
            a.postal_code,
            a.phone,
            a.last_update AS address_last_update
        FROM customer u
        LEFT JOIN address a
            ON u.address_id = a.address_id
        LEFT JOIN city i
            ON a.city_id = i.city_id
        LEFT JOIN country o
            ON i.country_id = o.country_id
        WHERE u.customer_id = ${customerId};`;

  const rows = await makeQuery(sqlQry);
  if (!rows || !rows.length) {
    return undefined;
  }

  const customer = rows && rows[0];
  return {
    id: customer.customer_id,
    firstName: customer.first_name,
    surname: customer.last_name,
    email: customer.email,
    isActive: customer.active === 1,
    createDate: customer.create_date,
    lastUpdate: customer.last_update,
    addressId: customer.address_id,
    address: customer.address,
    address2: customer.address2,
    district: customer.district,
    city: customer.city,
    country: customer.country,
    postalCode: customer.postal_code,
    phone: customer.phone,
    addressLastUpdate: customer.address_last_update
  };
};

const fetchCustomersFromSource = async function fetchCustomersFromSource({
  count,
  sortBy,
  order = 'ASC'
}) {
  const orderBy = mapFields()[sortBy] || sortBy || 'customer_id';
  const sqlQry = `
        SELECT
            c.customer_id,
            c.store_id,
            c.first_name,
            c.last_name,
            c.email,
            c.address_id,
            c.active,
            c.create_date,
            c.last_update
        FROM customer c
        ORDER BY ${orderBy} ${order} LIMIT ${count};`;

  const customers = await makeQuery(sqlQry);
  return customers.map(cust => ({
    id: cust.customer_id,
    firstName: cust.first_name,
    surname: cust.last_name,
    email: cust.email,
    addressId: cust.address_id,
    isActive: cust.active === 1,
    createDate: cust.create_date,
    lastUpdate: cust.last_update
  }));
};

const getCustomer = async function getCustomers(customerId) {
  try {
    const customers = await fetchCustomerFromSource(customerId);
    return customers;
  } catch (err) {
    throw new Error(err);
  }
};

const getCustomers = async function getCustomers(opts) {
  try {
    const customers = await fetchCustomersFromSource(opts);
    return customers;
  } catch (err) {
    throw new Error(err);
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
