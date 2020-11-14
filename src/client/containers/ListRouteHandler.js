import React from 'react';
import PropTypes from 'prop-types';
import { receiveData, receiveDataError } from '../actions';
import { getEmployees } from '../services/data';
import ListContainer from './ListContainer';
import withUniversalLoad from '../lib/withUniversalLoad';

const ListWithUniversalLoad = withUniversalLoad(ListContainer, {
  dataSource: getEmployees,
  dataSourceParams: {
    sortBy: {
      inState: true
    }
  },
  successAction: receiveData,
  failureAction: receiveDataError
});

const ListRouteHandler = ({ initialState }) => {
  return <ListWithUniversalLoad initialState={initialState} />;
};

// Override loadData
ListRouteHandler.loadData = async function preloadData(params) {
  const data = await ListWithUniversalLoad.loadData(params);
  return {
    data
  };
};

export default ListRouteHandler;

ListRouteHandler.propTypes = {
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

ListRouteHandler.defaultProps = {
  initialState: {
    data: {
      list: []
    },
    sortBy: {
      column: 'codeNumber',
      orderDesc: false
    }
  }
};
