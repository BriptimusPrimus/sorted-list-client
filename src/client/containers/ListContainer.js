import React from 'react';
import PropTypes from 'prop-types';
import MainView from '../components/MainView';
import { sortByColumn, receiveData, receiveDataError } from '../actions';
import { getEmployees } from '../services/data';

const ListContainer = ({ state, dispatch }) => {
  const onSetSortColumn = (column, orderDesc) => {
    const fetchOpts = {
      sortBy: {
        column,
        orderDesc
      }
    };
    getEmployees(fetchOpts)
      .then(function fullfilled(data) {
        dispatch(sortByColumn(column));
        dispatch(receiveData(data));
      })
      .catch(function rejected(reason) {
        dispatch(receiveDataError(reason));
      });
  };

  return (
    <MainView
      data={state.data}
      sortBy={state.sortBy}
      onSetSortColumn={onSetSortColumn}
    />
  );
};

export default ListContainer;

ListContainer.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.shape({
      list: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string,
          surname: PropTypes.string,
          surname2: PropTypes.string,
          codeNumber: PropTypes.string,
          rfc: PropTypes.string,
          status: PropTypes.string
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

ListContainer.defaultProps = {
  state: {},
  dispatch: () => {}
};
