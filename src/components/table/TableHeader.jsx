import React from 'react';

export default class TableHeader extends React.Component {
  render() {
    return(
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Surname</th>
          <th className="text-center">Code Number</th>
          <th className="text-center">RFC</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
    );
  }
}