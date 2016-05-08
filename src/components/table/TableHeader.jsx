import React from 'react';

export default class TableHeader extends React.Component {
  render() {
    return(
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Age</th>
          <th className="text-center">Status</th>
          <th className="text-center">Last seen on</th>
          <th className="text-center">Owner</th>
        </tr>
      </thead>
    );
  }
}