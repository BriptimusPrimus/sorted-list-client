import fetch from 'isomorphic-fetch';
import querystring from 'querystring';
import config from '../../../config';

const apiEndpoint = `${config.data_service.api.protocol}://${config.data_service.api.host}:${config.data_service.api.port}/${config.data_service.api.root}/`;

const getRequest = async function getRequest(endpoint) {
  const requestConf = {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  const response = await fetch(endpoint, requestConf);

  if (response.status === 404) {
    return {
      notFound: true
    };
  }

  if (response.status !== 200) {
    return {
      error: 'Service Failure',
      status: response.status
    };
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(data);
  }

  return data;
};

const getEmployees = function getEmployees(options = {}) {
  const sortBy = options.sortBy || {
    column: 'codeNumber'
  };

  const params = {
    count: options.count || config.data_service.defaulCount,
    sort: sortBy.column,
    order: sortBy.orderDesc ? 'DESC' : 'ASC'
  };

  const endpoint = `${
    apiEndpoint + config.data_service.api.employees_data
  }?${querystring.stringify(params)}`;

  return getRequest(endpoint);
};

const getCustomers = function getCustomers(options = {}) {
  const sortBy = options.sortBy || {
    column: 'email'
  };

  const params = {
    count: options.count || config.data_service.defaulCount,
    sort: sortBy.column,
    order: sortBy.orderDesc ? 'DESC' : 'ASC'
  };

  const endpoint = `${
    apiEndpoint + config.data_service.api.customers_data
  }?${querystring.stringify(params)}`;

  return getRequest(endpoint);
};

const getCustomerDetails = function getCustomerDetails({ customerId } = {}) {
  const endpoint = `${
    apiEndpoint + config.data_service.api.customer_details
  }/${customerId}`;

  return getRequest(endpoint);
};

export { getEmployees, getCustomers, getCustomerDetails };
