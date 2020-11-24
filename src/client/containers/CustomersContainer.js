import React from 'react';
import PropTypes from 'prop-types';
import CustomersView from '../components/customersList/CustomersView';
import { sortByColumn, receiveData, receiveDataError } from '../actions';
import { getCustomers } from '../services/data';

const CustomersContainer = ({ state, dispatch }) => {
  const onSetSortColumn = (column, orderDesc) => {
    const fetchOpts = {
      sortBy: {
        column,
        orderDesc
      }
    };
    getCustomers(fetchOpts)
      .then(function fullfilled(data) {
        dispatch(sortByColumn(column));
        dispatch(receiveData(data));
      })
      .catch(function rejected(reason) {
        dispatch(receiveDataError(reason));
      });
  };

  return (
    <CustomersView
      data={state.data}
      sortBy={state.sortBy}
      onSetSortColumn={onSetSortColumn}
    />
  );
};

export default CustomersContainer;

CustomersContainer.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.shape({
      customers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          firstName: PropTypes.string,
          surname: PropTypes.string,
          email: PropTypes.string,
          addressId: PropTypes.number,
          isActive: PropTypes.bool,
          createDate: PropTypes.string,
          lastUpdate: PropTypes.string
        })
      )
    }),
    sortBy: PropTypes.shape({
      column: PropTypes.string,
      orderDesc: PropTypes.bool
    })
  }),
  dispatch: PropTypes.func
};

CustomersContainer.defaultProps = {
  state: {},
  dispatch: () => {}
};
