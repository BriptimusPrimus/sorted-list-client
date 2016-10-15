import React from 'react';

export default class TableRow extends React.Component {
  getRecord() {
    return this.props.row || {};
  }
  capitalizeFirstLetter(str) {
    if (!str) {
      return '';
    }
    return str[0].toUpperCase() + str.slice(1);
  }
  render() {
    const record = this.getRecord();
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
          {this.capitalizeFirstLetter(record.status)}
        </td>
      </tr>
    );
  }
}