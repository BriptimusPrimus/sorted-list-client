import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(row => (
        <TableRow key={row.id} record={row} />
      ))}
    </tbody>
  );
};

export default TableBody;

TableBody.propTypes = {
  data: PropTypes.arrayOf({
    firstName: PropTypes.string,
    surname: PropTypes.string,
    surname2: PropTypes.string,
    codeNumber: PropTypes.string,
    rfc: PropTypes.string,
    status: PropTypes.string
  })
};

TableBody.defaultProps = {
  data: []
};
