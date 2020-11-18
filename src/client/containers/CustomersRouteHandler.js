import React from 'react';
import PropTypes from 'prop-types';
import { receiveData, receiveDataError } from '../actions';
import { getCustomers } from '../services/data';
import CustomersContainer from './CustomersContainer';
import withUniversalLoad from '../lib/withUniversalLoad';

const CustomersWithUniversalLoad = withUniversalLoad(CustomersContainer, {
  dataSource: getCustomers,
  dataSourceParams: {
    sortBy: {
      inState: true
    }
  },
  successAction: receiveData,
  failureAction: receiveDataError
});

const CustomersRouteHandler = ({ initialState }) => {
  return <CustomersWithUniversalLoad initialState={initialState} />;
};

// Override loadData
CustomersRouteHandler.loadData = async function preloadData(params) {
  const data = await CustomersWithUniversalLoad.loadData(params);
  return {
    data
  };
};

export default CustomersRouteHandler;

CustomersRouteHandler.propTypes = {
  initialState: PropTypes.shape({
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
  })
};

CustomersRouteHandler.defaultProps = {
  initialState: {
    data: {
      customers: []
    },
    sortBy: {
      column: 'id',
      orderDesc: false
    }
  }
};
