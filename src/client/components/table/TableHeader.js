import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ sortBy, onSetSortColumn }) => {
  const sortClass = sortBy.orderDesc ? 'order-desc' : 'order-asc';

  const setColumnSortClass = function setColumnSortClass(column) {
    return sortBy.column === column
      ? `text-center actionable ${sortClass}`
      : 'text-center actionable';
  };

  const onHeaderClick = function onHeaderClick(column) {
    const orderDesc = column === sortBy.column ? !sortBy.orderDesc : false;
    onSetSortColumn(column, orderDesc);
  };

  return (
    <thead>
      <tr>
        <th
          className={`col-xs-3 ${setColumnSortClass('name')}`}
          onClick={() => onHeaderClick('name')}
        >
          Name
        </th>
        <th
          className={`col-xs-3 ${setColumnSortClass('surname')}`}
          onClick={() => onHeaderClick('surname')}
        >
          Surname
        </th>
        <th
          className={`col-xs-2 ${setColumnSortClass('code')}`}
          onClick={() => onHeaderClick('code')}
        >
          Code Number
        </th>
        <th
          className={`col-xs-2 ${setColumnSortClass('rfc')}`}
          onClick={() => onHeaderClick('rfc')}
        >
          RFC
        </th>
        <th
          className={`col-xs-2 ${setColumnSortClass('status')}`}
          onClick={() => onHeaderClick('status')}
        >
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  sortBy: PropTypes.shape({
    column: PropTypes.string,
    orderDesc: PropTypes.bool
  }),
  onSetSortColumn: PropTypes.func
};

TableHeader.defaultProps = {
  sortBy: {},
  onSetSortColumn: () => {}
};
