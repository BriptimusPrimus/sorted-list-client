import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const DataTable = ({ data, sortBy, onSetSortColumn }) => {
  return (
    <table className='table table-striped table-condensed table-bordered'>
      <TableHeader sortBy={sortBy} onSetSortColumn={onSetSortColumn} />
      <TableBody data={data} />
    </table>
  );
};

export default DataTable;

DataTable.propTypes = {
  data: PropTypes.arrayOf({
    firstName: PropTypes.string,
    surname: PropTypes.string,
    surname2: PropTypes.string,
    codeNumber: PropTypes.string,
    rfc: PropTypes.string,
    status: PropTypes.string
  }),
  sortBy: PropTypes.shape(
    PropTypes.shape({
      column: PropTypes.string,
      orderDesc: PropTypes.bool
    })
  ),
  onSetSortColumn: PropTypes.func
};

DataTable.defaultProps = {
  data: [],
  sortBy: {},
  onSetSortColumn: () => {}
};
