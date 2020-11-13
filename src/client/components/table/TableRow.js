import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ record }) => {
  const capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    if (!str || str.length < 1) {
      return '';
    }
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <tr>
      <td className="text-center">{record.firstName}</td>
      <td className="text-center">
        {record.surname} {record.surname2}
      </td>
      <td className="text-center">{record.codeNumber}</td>
      <td className="text-center">{record.rfc}</td>
      <td className="text-center">{capitalizeFirstLetter(record.status)}</td>
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  record: PropTypes.shape({
    firstName: PropTypes.string,
    surname: PropTypes.string,
    surname2: PropTypes.string,
    codeNumber: PropTypes.string,
    rfc: PropTypes.string,
    status: PropTypes.string
  })
};

TableRow.defaultProps = {
  record: {}
};
