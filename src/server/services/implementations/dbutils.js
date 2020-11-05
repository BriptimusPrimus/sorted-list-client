/*
 * Database server connection utils
 */
const mysql = require('mysql');
const conf = require('../../../../config').database;

const newConnection = async function newConnection() {
  const connection = mysql.createConnection(conf.connectionOptions);

  connection.on('error', function (err) {
    console.log('On DB connection error:', err);
  });

  return new Promise((resolve, reject) => {
    connection.connect(function (err) {
      if (err) {
        console.error('DB connection error:', err);
        reject(new Error(err));
        return;
      }
      resolve(connection);
    });
  });
};

const closeConnection = function closeConnection(con) {
  try {
    con.end(function (err) {
      if (err) {
        console.error('Close DB connection error');
      }
    });
  } catch (e) {
    console.error('Close DB connection exception:', e);
  }
};

const executeQuery = async function executeQuery(con, options) {
  const queryOpts = {
    ...options,
    timeout: options.timeout || conf.timeout
  };

  return new Promise((resolve, reject) => {
    con.query(queryOpts, function (err, rows) {
      if (err) {
        console.error('DB query error:', err);
        // TODO: check if necessary
        closeConnection(con);
        reject(new Error(err));
        return;
      }

      resolve(rows);
    });
  });
};

const makeQuery = async function makeQuery(sqlQry) {
  const con = await newConnection();
  const rows = await executeQuery(con, { sql: sqlQry });
  closeConnection(con);
  return rows;
};

module.exports = {
  newConnection,
  closeConnection,
  makeQuery
};
