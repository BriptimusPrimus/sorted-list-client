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

const mapFields = function mapFields() {
  return {
    name: 'firstName',
    surname: 'surname',
    code: 'codeNumber',
    rfc: 'rfc',
    status: 'status'
  };
};

const getEmployees = function getEmployees(options = {}) {
  const fieldMapper = mapFields();
  const sortBy = options.sortBy || {
    column: 'code'
  };

  const params = {
    count: options.count || config.data_service.defaulCount,
    sort: fieldMapper[sortBy.column] || sortBy.column,
    order: sortBy.orderDesc ? 'DESC' : 'ASC'
  };

  const endpoint = `${
    apiEndpoint + config.data_service.api.employees_data
  }?${querystring.stringify(params)}`;

  return getRequest(endpoint);
};

export { getEmployees };
