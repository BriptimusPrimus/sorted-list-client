import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
  getData() {
    return this.props.data || [
      {
        name: 'Fido',
        ageYears: 0,
        agetMonths: 3,
        status: 'lost',
        lastSeenOn: '31/01/2015',
        lastSeenWhere: 'Parque Guanal',
        owner: 'camou'
      },
      {
        name: 'Connie',
        ageYears: 2,
        agetMonths: 5,
        status: 'lost',
        lastSeenOn: '16/01/2015',
        lastSeenWhere: 'Blv. Park. 234',
        owner: 'ppenchis'
      },
      {
        name: 'Fido2',
        ageYears: 0,
        agetMonths: 3,
        status: 'lost',
        lastSeenOn: '31/01/2015',
        lastSeenWhere: 'Parque Guanal',
        owner: 'camou'
      }
    ];
  }

  render() {
    return(
      <tbody>
        {this.getData().map(row =>
          <TableRow key={row.name} row={row} />
        )}
      </tbody>      
    );
  }
}