const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

// GRANT ALL on sakila.* TO 'myusr'@'localhost' identified by '123456';
const conf = {
  db: {
    connectionOptions: {
      host: 'localhost',
      user: 'myusr',
      password: '123456',
      database: 'sakila'
    },
    timeout: 20000
  },
  files: {
    customers: 'customers.json',
    addresses: 'addresses.json'      
  }

};

const { makeQuery } = require('./dbutils')(conf.db);

const getAllCustomers = async function getAllCustomers() {
    const sqlQuery = `
        SELECT
            c.customer_id,
            c.store_id,
            c.first_name,
            c.last_name,
            c.email,
            c.address_id,
            c.active,
            c.create_date,
            c.last_update
        FROM customer c
        ORDER BY c.customer_id;    
    `;
    const rows = await makeQuery(sqlQuery);
    return rows;
}

const getAllAddresses = async function getAllAddresses() {
    const sqlQuery = `
        SELECT
            a.address_id,
            a.address,
            a.address2,
            a.district,
            a.city_id,
            c.city,
            c.country_id,
            o.country,
            a.postal_code,
            a.phone,
            a.last_update
        FROM address a
        LEFT JOIN city c
            ON a.city_id = c.city_id
        LEFT JOIN country o
            ON c.country_id = o.country_id
        ORDER BY a.address_id;  
    `;
    const rows = await makeQuery(sqlQuery);
    return rows;
}

const writeToFile = async function writeToFile(fileName, rows) {
    const obj = {
      rows
    }
    const json = JSON.stringify(obj);
    const data = await writeFile(fileName, json, 'utf8');
    console.log('Written in file:', fileName, ' data:', data);
}

const writeToCustomers = function writeToCustomers(rows) {
    writeToFile(conf.files.customers, rows);
}

const writeToAddresses = function writeToAddresses(rows) {
    writeToFile(conf.files.addresses, rows);
}

const copyCustomersToFile = async function copyCustomersToFile() {
    try {
        const rows = await getAllCustomers();
        writeToCustomers(rows);
    } catch(err) {
        console.log('Error in processing customers');
        console.error(err);
    }
}

const copyAddressesToFile = async function copyAddressesToFile() {
    try {
        const rows = await getAllAddresses();
        writeToAddresses(rows);
    } catch(err) {
        console.log('Error in processing customers');
        console.error(err);
    }
}

const run = async function run() {
    const beg = Date.now();
    await Promise.all([copyCustomersToFile(), copyAddressesToFile()]);
    console.log('Run finished');
    const end = Date.now();
    console.log('time:', (end - beg));    
}

run();
