import React from 'react';
import PropTypes from 'prop-types';
import { receiveData, receiveDataError } from '../actions';
import { getCustomerDetails } from '../services/data';
import CustomerDetailsContainer from './CustomerDetailsContainer';
import withUniversalLoad from '../lib/withUniversalLoad';

const CustomerDetailsWithUniversalLoad = withUniversalLoad(
  CustomerDetailsContainer,
  {
    dataSource: getCustomerDetails,
    dataSourceParams: {
      customerId: {
        inParams: true
      }
    },
    successAction: receiveData,
    failureAction: receiveDataError
  }
);

const CustomerDetailsRouteHandler = ({ initialState }) => {
  return <CustomerDetailsWithUniversalLoad initialState={initialState} />;
};

// Override loadData
CustomerDetailsRouteHandler.loadData = async function preloadData(params) {
  const data = await CustomerDetailsWithUniversalLoad.loadData(params);
  return {
    data
  };
};

export default CustomerDetailsRouteHandler;

CustomerDetailsRouteHandler.propTypes = {
  initialState: PropTypes.shape({
    data: PropTypes.shape({
      customerDetails: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        surname: PropTypes.string,
        email: PropTypes.string,
        addressId: PropTypes.number,
        isActive: PropTypes.bool,
        createDate: PropTypes.string,
        lastUpdate: PropTypes.string,
        address: PropTypes.string,
        address2: PropTypes.string,
        addressLastUpdate: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string,
        district: PropTypes.string,
        phone: PropTypes.string,
        postal_code: PropTypes.string
      })
    })
  })
};

CustomerDetailsRouteHandler.defaultProps = {
  initialState: {
    data: {}
  }
};
