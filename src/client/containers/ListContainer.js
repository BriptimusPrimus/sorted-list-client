import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainView from '../components/MainView';
import { sortByColumn, receiveData, receiveDataError } from '../actions';
import reducer from '../reducers';
import { getEmployees } from '../services/data';

const ListContainer = ({ initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // trigger initial request to the server
    const fetchOpts = {
      sortBy: state.sortBy
    };
    getEmployees(fetchOpts)
      .then(function fullfilled(data) {
        dispatch(receiveData(data));
      })
      .catch(function rejected(reason) {
        dispatch(receiveDataError(reason));
        console.error('response error:', reason);
        console.log('state:', state);
      });
  }, []); // This effect never re-runs

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
        console.error('response error:', reason);
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

ListContainer.loadData = async function loadData() {
  try {
    const data = await getEmployees({
      sortBy: {
        column: 'code',
        orderDesc: true
      }
    });
    return {
      data
    };
  } catch (err) {
    return {};
  }
};

ListContainer.propTypes = {
  initialState: PropTypes.shape({
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
  })
};

ListContainer.defaultProps = {
  initialState: {
    data: {
      list: []
    },
    sortBy: {
      column: 'code',
      orderDesc: false
    }
  }
};
