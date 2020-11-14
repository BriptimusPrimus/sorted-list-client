import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const DataTable = ({ data, sortBy, onSetSortColumn }) => {
  return (
    <table className="table table-striped table-condensed table-bordered">
      <TableHeader sortBy={sortBy} onSetSortColumn={onSetSortColumn} />
      <TableBody data={data} />
    </table>
  );
};

export default DataTable;

DataTable.propTypes = {
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
  ),
  sortBy: PropTypes.shape({
    column: PropTypes.string,
    orderDesc: PropTypes.bool
  }),
  onSetSortColumn: PropTypes.func
};

DataTable.defaultProps = {
  data: [],
  sortBy: {},
  onSetSortColumn: () => {}
};
