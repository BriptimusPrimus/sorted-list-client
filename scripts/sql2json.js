var mysql = require('mysql');
var fs = require('fs');

// GRANT ALL on sorted_list.* to 'myusr'@'localhost' identified by '123456';
var conf = {
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
  var connection = mysql.createConnection(conf.db.connectionOptions);

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
  var sqlQry = `
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

function read(callback) {
  getAllpersons(function(err, rows) {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
}

function write(rows, callback) {
  var FILE_NAME = 'persona.json';
  var obj = {
    rows: rows
  }
  var json = JSON.stringify(obj);

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
  var beg = Date.now();
  var end;

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
    end = Date.now();
    console.log('time:', (end - beg));
  }
}

run();





