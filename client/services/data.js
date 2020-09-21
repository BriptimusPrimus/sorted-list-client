import config from '../../config';
import querystring from 'querystring';

const apiEndpoint = config.data_service.api.protocol + '://'
  + config.data_service.api.host + ':'
  + config.data_service.api.port + '/'
  + config.data_service.api.root + '/';

const getRequest = async function getRequest1(endpoint) {
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
    }
  }
  
  const data = await response.json();
  if (data.error) {
    throw new Error(data);
  }

  return data;
}

const postRequest = async function postRequest(enpoint) {
  const requestConf = {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  }

  const response = await fetch(endpoint, requestConf);
  if (response.status !== 200) {
    return {
      error: 'Service Failure',
      status: response.status
    }
  }

  const data = await response.json;
  if (data.error) {
    throw new Error(data);
  }

  return data;
}

const mapFields = function mapFields() {
  return {
    'name': 'firstName',
    'surname': 'surname',
    'code': 'codeNumber',
    'rfc': 'rfc',
    'status': 'status'
  }
}

const getEmployees = function getEmployees(options) {
  options = options || {};
  options.sortBy = options.sortBy || {};
  options.sortBy.column = options.sortBy.column || 'name';
  const fieldMapper = mapFields();
  const params = {
    count: options.count || config.data_service.defaulCount,
    sort: fieldMapper[options.sortBy.column],
    order: options.sortBy.orderDesc ? 'DESC' : 'ASC'
  }

  const endpoint = apiEndpoint
    + config.data_service.api.employees_data +
    '?' + querystring.stringify(params);

  console.log('GET REQUEST TO:', endpoint);

  return getRequest(endpoint);
}

export {
  getEmployees
}