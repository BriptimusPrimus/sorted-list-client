import React from 'react';
import PropTypes from 'prop-types';

const formatId = id => `00000${id}`.slice(-5);

const formatDate = date => (date && date.slice(0, 10)) || '';

const TableRow = ({ record }) => {
  return (
    <tr>
      <td className="text-center">{formatId(record.id)}</td>
      <td className="text-center">{record.firstName}</td>
      <td className="text-center">{record.surname}</td>
      <td className="text-center">{record.isActive ? 'YES' : 'NO'}</td>
      <td className="text-center">{formatDate(record.createDate)}</td>
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    addressId: PropTypes.number,
    isActive: PropTypes.bool,
    createDate: PropTypes.string,
    lastUpdate: PropTypes.string
  })
};

TableRow.defaultProps = {
  record: {}
};
