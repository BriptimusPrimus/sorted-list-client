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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      surname: PropTypes.string,
      email: PropTypes.string,
      addressId: PropTypes.number,
      isActive: PropTypes.bool,
      createDate: PropTypes.string,
      lastUpdate: PropTypes.string
    })
  )
};

TableBody.defaultProps = {
  data: []
};
