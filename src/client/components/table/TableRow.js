import React from 'react';

const TableRow = ({ record = {} }) => {
  const capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    if (!str || str.length < 1) {
      return '';
    }
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <tr>
      <td className='text-center'>{record.firstName}</td>
      <td className='text-center'>
        {record.surname}-{record.surname2}
      </td>
      <td className='text-center'>{record.codeNumber}</td>
      <td className='text-center'>{record.rfc}</td>
      <td className='text-center'>{capitalizeFirstLetter(record.status)}</td>
    </tr>
  );
};

export default TableRow;
