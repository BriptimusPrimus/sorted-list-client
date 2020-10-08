import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const DataTable = ({ data, sortBy, onSetSortColumn }) => {
  return(
    <table className="table table-striped table-condensed table-bordered">
      <TableHeader
        sortBy={sortBy}
        onSetSortColumn={onSetSortColumn}
      />
      <TableBody data={data}/>
    </table>
  );
};

export default DataTable;