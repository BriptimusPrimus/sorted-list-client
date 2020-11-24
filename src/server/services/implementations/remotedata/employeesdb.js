/*
 * Data Access Service Implementation
 */
const conf = require('../../../../../config').dal.databases.employees;
const { makeQuery } = require('./dbutils')(conf);

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

const fetchEmployeesFromSource = async function fetchEmployeesFromSource({
  count,
  sortBy,
  order = 'ASC'
}) {
  const orderBy = mapFields()[sortBy] || sortBy || 'codigo';
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
    FROM persona p
    ORDER BY ${orderBy} ${order} LIMIT ${count};`;

  const employees = await makeQuery(sqlQry);
  return employees.map(emp => ({
    id: emp.idpersona,
    firstName: emp.nombre,
    surname: emp.apaterno,
    surname2: emp.amaterno,
    codeNumber: emp.codigo,
    rfc: emp.rfc,
    status:
      emp.status.toLowerCase() === 'contratado'
        ? 'hired'
        : emp.status.toLowerCase()
  }));
};

const getEmployees = async function getEmployees(opts) {
  try {
    const employees = await fetchEmployeesFromSource(opts);
    return employees;
  } catch (err) {
    throw new Error(err);
  }
};

// This object implements the bridge interface:
// interface: {
//   getEmployees: async function(options){}
// }
module.exports = {
  getEmployees
};
