/*
 * Data Access Mock Service
 */

const fs = require('fs');
const path = require('path');
const conf = require('../../../../config');

const FILE_PATH = path.join(__dirname, conf.dal.datasources.employees.file);

const mapFields = function mapFields() {
  return {
    id: 'idpersona',
    firstName: 'nombre',
    surname: 'apaterno',
    surname2: 'amaterno',
    codeNumber: 'codigo',
    rfc: 'rfc',
    status: 'status'
  };
};

function readFromFile(callback) {
  fs.readFile(FILE_PATH, 'utf8', function readFileCb(err, data) {
    if (err) {
      callback(err);
      return;
    }

    const obj = JSON.parse(data);
    const list = (obj && obj.rows) || [];
    callback(null, list);
  });
}

function sort(rows, opts) {
  if (!opts.sortBy) {
    return;
  }

  const sortBy = mapFields()[opts.sortBy];
  if (!sortBy) {
    return;
  }

  const ord = opts.order === 'DESC' ? -1 : 1;
  rows.sort(function sortRule(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1 * ord;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1 * ord;
    }
    return 0;
  });
}

function pickFields(list) {
  const getStatus = function getStatus(status) {
    const value = status.toLowerCase();
    return value === 'contratado' ? 'hired' : value;
  };

  const mapFn = function mapFn(obj) {
    return {
      id: obj.idpersona,
      firstName: obj.nombre,
      surname: obj.apaterno,
      surname2: obj.amaterno,
      codeNumber: obj.codigo,
      rfc: obj.rfc,
      status: getStatus(obj.status)
    };
  };

  return list.map(mapFn);
}

function extractChunk(rows, opts) {
  const i = (opts.page - 1) * opts.count;
  const j = i + opts.count;
  return rows.slice(i, j);
}

const getEmployees = async function getEmployees(opts) {
  return new Promise((resolve, reject) => {
    // Test failure scenario
    if (opts.sortBy === 'forceServiceError') {
      reject(new Error('Mock DAL error'));
      return;
    }
    function onRead(err, list) {
      if (err) {
        reject(new Error('Mock DAL error'));
        return;
      }

      sort(list, opts);
      const chunk = extractChunk(list, opts);
      const resultChunk = pickFields(chunk);
      resolve(resultChunk);
    }
    readFromFile(onRead);
  });
};

// This object implements the bridge interface:
// interface: {
//   getEmployees: async function(options){}
// }
module.exports = {
  getEmployees
};
