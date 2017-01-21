import React from 'react';

export default class TableHeader extends React.Component {
  render() {
    const onSetSortColumn = this.props.onSetSortColumn;
    const sortBy = this.props.sortBy || {};
    const sortClass = sortBy.orderDesc ?
      'order-desc' : 'order-asc';

    function setColumnSortClass(column) {
      return sortBy.column === column ?
        'text-center actionable ' + sortClass : 'text-center actionable';
    }

    function onHeaderClick(column) {
      if (typeof onSetSortColumn === 'function') {
        onSetSortColumn(column, !sortBy.orderDesc);
      }
    }

    return(
      <thead>
        <tr>
          <th
            className={setColumnSortClass('name')}
            onClick={() => onHeaderClick('name')}
          >
            Name
          </th>
          <th
            className={setColumnSortClass('surname')}
            onClick={() => onHeaderClick('surname')}
          >
            Surname
          </th>
          <th
            className={setColumnSortClass('code')}
            onClick={() => onHeaderClick('code')}
          >
            Code Number
          </th>
          <th
            className={setColumnSortClass('rfc')}
            onClick={() => onHeaderClick('rfc')}
          >
            RFC
          </th>
          <th
            className={setColumnSortClass('status')}
            onClick={() => onHeaderClick('status')}
          >
            Status
          </th>
        </tr>
      </thead>
    );
  }
}