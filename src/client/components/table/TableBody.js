import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data=[] }) => {
  return(
    <tbody>
      {data.map(row =>
        <TableRow key={row.id} record={row} />
      )}
    </tbody>
  );
};

export default TableBody;