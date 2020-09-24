import React from 'react';

const TableHeader = ({ sortBy={}, onSetSortColumn }) => {
  const sortClass = sortBy.orderDesc ?
    'order-desc' : 'order-asc';

  const setColumnSortClass = function setColumnSortClass(column) {
    return sortBy.column === column ?
      `text-center actionable ${sortClass}` : 'text-center actionable';
  }

  const onHeaderClick = function onHeaderClick(column) {
    var orderDesc = column === sortBy.column ?
      !sortBy.orderDesc : true;
    onSetSortColumn(column, orderDesc);
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
};

export default TableHeader;