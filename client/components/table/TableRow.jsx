import React from 'react';

const TableRow = (props) => {
  function getRecord() {
    return props.row || {};
  }

  function capitalizeFirstLetter(str) {
    if (!str) {
      return '';
    }
    return str[0].toUpperCase() + str.slice(1);
  }

  const record = getRecord();

  return(
    <tr>
      <td className="text-center">
        {record.firstName}
      </td>
      <td className="text-center">
        {record.surname}-{record.surname2}
      </td>
      <td className="text-center">
        {record.codeNumber}
      </td>
      <td className="text-center">
        {record.rfc}
      </td>
      <td className="text-center">
        {capitalizeFirstLetter(record.status)}
      </td>
    </tr>
  );
}

export default TableRow;