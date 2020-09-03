import config from '../../config';
import querystring from 'querystring';

const apiEndpoint = config.data_service.api.protocol + '://'
  + config.data_service.api.host + ':'
  + config.data_service.api.port + '/'
  + config.data_service.api.root + '/';

function getRequest(endpoint) {
  function makeRequest(resolve, reject) {
    const requestConf = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    fetch(endpoint, requestConf)
      .then(function(response) {
        if (response.status !== 200) {
          return {
            error: 'Service Failure',
            status: response.status
          }
        }
        return response.json();
      })
      .then(function(data) {
        if(data.error) {
          reject(data);
        } else {
          resolve(data);
        }
      })
      .catch(function(reason) {
        reject({
          error: 'Service Failure'
        });
      });
  }

  return new Promise(function(resolve, reject) {
    makeRequest(resolve, reject);
  });
}

function postRequest(enpoint, data) {
  function makeRequest(resolve, reject) {
    const requestConf = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    }

    fetch(endpoint, requestConf)
      .then(function(response) {
        if (response.status !== 200) {
          return {
            error: 'Service Failure',
            status: response.status
          }
        }
        return response.json();
      })
      .then(function(data) {
        if(data.error) {
          reject(data);
        } else {
          resolve(data);
        }
      })
      .catch(function(reason) {
        reject({
          error: 'Service Failure'
        });
      });
  }

  return new Promise(function(resolve, reject) {
    makeRequest(resolve, reject);
  });

}

function mapFields() {
  return {
    'name': 'firstName',
    'surname': 'surname',
    'code': 'codeNumber',
    'rfc': 'rfc',
    'status': 'status'
  }
}

function getEmployees(options) {
  options = options || {};
  options.sortBy = options.sortBy || {};
  options.sortBy.column = options.sortBy.column || 'name';
  const filedMapper = mapFields();
  const params = {
    count: options.count || config.data_service.defaulCount,
    sort: filedMapper[options.sortBy.column],
    order: options.sortBy.orderDesc ? 'DESC' : 'ASC'
  }

  const endpoint = apiEndpoint
    + config.data_service.api.employees_data +
    '?' + querystring.stringify(params);

  console.log('GET REQUEST TO:', endpoint);

  return getRequest(endpoint);
}

export default {
  getEmployees
}