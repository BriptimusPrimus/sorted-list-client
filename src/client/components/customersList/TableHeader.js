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
          className={`col-xs-3 ${setColumnSortClass('email')}`}
          onClick={() => onHeaderClick('email')}
        >
          Email
        </th>
        <th
          className={`col-xs-3 ${setColumnSortClass('firstName')}`}
          onClick={() => onHeaderClick('firstName')}
        >
          First Name
        </th>
        <th
          className={`col-xs-3 ${setColumnSortClass('surname')}`}
          onClick={() => onHeaderClick('surname')}
        >
          Last Name
        </th>
        <th
          className={`col-xs-1 ${setColumnSortClass('isActive')}`}
          onClick={() => onHeaderClick('isActive')}
        >
          Active
        </th>
        <th
          className={`col-xs-2 ${setColumnSortClass('createDate')}`}
          onClick={() => onHeaderClick('createDate')}
        >
          Joined on
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
