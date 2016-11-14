import config from '../../config';

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

function getEmployees() {
  const endpoint = apiEndpoint
    + config.data_service.api.employees_data +
    '?count=' + config.data_service.defaulCount;

  return getRequest(endpoint);
}

export default {
  getEmployees
}