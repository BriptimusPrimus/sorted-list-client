/*
 * Data Access Mock Service
 */

var fs = require('fs');
var path = require('path');
var conf = require('../../../config');
var FILE_PATH = path.join(__dirname, conf.database.file);

function readFromFile(callback) {
  fs.readFile(FILE_PATH, 'utf8', function(err, data) {
    if (err) {
      return callback(err);
    }

    var obj = JSON.parse(data);
    var list = (obj && obj.rows) || [];
    callback(null, list);
  });
}

function sort(rows, opts) {
  if (!opts.sortBy) {
    return;
  }

  var sortBy = mapFields()[opts.sortBy];

  var ord = 1;
  if (opts.order === 'DESC') {
    ord = -1;
  }

  rows.sort(function(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1 * ord;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1 * ord;
    }
    return 0;    
  });
}

function mapFields() {
  return {
    'id': 'idpersona',
    'firstName': 'nombre',
    'surname': 'apaterno',
    'surname2': 'amaterno',
    'codeNumber': 'codigo',
    'rfc': 'rfc',
    'status': 'status'
  }
}

function pickFields(list) {
  return list.map(mapFn);

  function getStatus(status) {
    status = status.toLowerCase();
    return status === 'contratado' ?
      'hired' : status;
  }

  function mapFn(obj) {
    return {
      id: obj.idpersona,
      firstName: obj.nombre,
      surname: obj.apaterno,
      surname2: obj.amaterno,
      codeNumber: obj.codigo,
      rfc: obj.rfc,
      status: getStatus(obj.status)   
    }
  }
}

function extractChunk(rows, opts) {
  var i = (opts.page - 1) * opts.count;
  var j = i + opts.count;
  return rows.slice(i, j);
}

function getEmployees(opts, callback) {
  var chunk;
  readFromFile(onRead);

  function onRead(err, list) {
    if (err) {
      console.log('Mock DAL error:', err);
      return callback('Mock DAL error');
    }

    sort(list, opts);
    chunk = extractChunk(list, opts);
    chunk = pickFields(chunk);
    callback(null, chunk);
  }
}

// This object implements the bridge interface:
// interface: {
//   getEmployees: function(options, callback){}
// }
module.exports = {
	getEmployees: getEmployees
};