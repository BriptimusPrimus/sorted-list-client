import React from 'react';

export default class TableRow extends React.Component {
  getRecord() {
    return this.props.row || {};
  }
  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  render() {
    const record = this.getRecord();
    return(
      <tr>
        <td className="text-center">
          {record.name}
        </td>
        <td className="text-center">
          {record.ageYears} Years, {record.ageMonths} Months
        </td>
        <td className="text-center">
          {this.capitalizeFirstLetter(record.status)}
        </td>
        <td className="text-center">
          Last seen on {record.lastSeenOn} At {record.lastSeenWhere}
        </td>
        <td className="text-center">
          {record.owner}
        </td>
      </tr>
    );
  }
}