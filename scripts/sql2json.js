const mysql = require('mysql');
const fs = require('fs');

// GRANT ALL on sorted_list.* to 'myusr'@'localhost' identified by '123456';
const conf = {
  db: {
    connectionOptions: {
      host: 'localhost',
      user: 'myusr',
      password: '123456',
      database: 'sorted_list'
    },
    timeout: 20000
  }
};

function newConnection(callback) {
  const connection = mysql.createConnection(conf.db.connectionOptions);

  connection.connect(function(err) {
    if (err) {
      console.log('DB connection error:', err);
      return callback(err);
    }
    return callback(null, connection);
  });

  connection.on('error', function(err) {
    console.log('On DB connection error:', err);
  });
}

function closeConnection(con) {
  try {
    con.end(function(err) {
      if (err) {
        console.log('Close DB connection error');    
      }
    });
  } catch(e) {
    console.log('Close DB connection exception:', e);
  }
}

function executeQuery(con, options, callback) {
  options.timeout = options.timeout || conf.db.timeout;
  con.query(options, function(err, rows, fields) {
    if (err) {
      console.log('DB query error:', err);
      closeConnection(con);
      return callback(err);
    }
    return callback(null, rows);
  });
}

function executeOne(sqlQry, callback) {
  newConnection(onConnected);

  function onConnected(err, con) {
    if (err) {
      return callback(err);
    }

    executeQuery(con, {
      sql: sqlQry
    }, function(err, rows) {
      if(err) {
        return callback(err);
      }
      closeConnection(con);
      return callback(null, rows);
    });
  }
}

function getAllpersons(callback) {
  const sqlQry = `
    SELECT
        p.idpersona,
        p.idmunicipio,
        p.nombre,
        p.apaterno,
        p.amaterno,
        p.codigo,
        p.rfc,
        p.homoclave,
        p.nss,
        p.status
    FROM persona p;  
  `;

  executeOne(sqlQry, function(err, rows) {
    if (err) {
      return callback(err);
    }
    return callback(null, rows);
  });
}

function getAllAdditionalData(callback) {
  const sqlQry = `
    SELECT
        p.iddatosdepersona,
        p.idpersona,
        p.fechanac,
        p.edocivil,
        p.curp,
        p.sexo,
        p.nacionalidad,
        p.email,
        p.telefono1,
        p.ife,
        p.lugaranhocasamiento,
        p.tieneinfonavit,
        p.creditoinfonavit,
        p.tipoinfonavit,
        p.descuentoinfonavit
    FROM datosdepersona p;
  `;

  executeOne(sqlQry, function(err, rows) {
    if (err) {
      return callback(err);
    }
    return callback(null, rows);
  });
}

function read(callback) {
  getAllpersons(function(err, rows) {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
}

function readAdditionalData(callback) {
  getAllAdditionalData(function(err, rows) {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
}

function writeToFile(fileName, rows, callback) {
  const FILE_NAME = fileName;
  const obj = {
    rows: rows
  }
  const json = JSON.stringify(obj);

  fs.writeFile(FILE_NAME, json, 'utf8', onWriteFile);

  function onWriteFile(err, data) {
    if (err) {
      return callback(err);
    }
    console.log('Written in file:');
    console.log(data);
    callback(null);
  }
}

function writeAdditionalData(rows, callback) {
  writeToFile('datosdepersona.json', rows, callback);
}

function write(rows, callback) {
  const FILE_NAME = 'persona.json';
  const obj = {
    rows: rows
  }
  const json = JSON.stringify(obj);

  fs.writeFile(FILE_NAME, json, 'utf8', onWriteFile);

  function onWriteFile(err, data) {
    if (err) {
      return callback(err);
    }
    console.log('Written in file:');
    console.log(data);
    callback(null);
  }
}

function run() {
  const beg = Date.now();

  // read from table persona
  read(onRead);

  function onRead(err, rows) {
    if (err) {
      new Error('Read error:', err);
      return;
    }
    write(rows, onWrite);
  }

  function onWrite(err) {
    if (err) {
      new Error('Write error:', err);
      return;
    }
    console.log('Run successfull');
    const end = Date.now();
    console.log('time:', (end - beg));
  }

  // read from table datosdepersona
  readAdditionalData(function onReadAdditionalData(err, rows) {
    if (err) {
      new Error('Read error:', err);
      return;
    }
    writeAdditionalData(rows, onWrite);
  });
}

run();





