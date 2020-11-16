import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../components/NotFound';
import CustomerDetailsView from '../components/CustomerDetails/CustomerDetailsView';

const CustomerDetailsContainer = ({ state }) => {
  if (state.data.notFound) {
    return <NotFound />;
  }
  return <CustomerDetailsView customer={state.data.customerDetails} />;
};

export default CustomerDetailsContainer;

CustomerDetailsContainer.propTypes = {
  state: PropTypes.shape({
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
        postalCode: PropTypes.string
      }),
      notFound: PropTypes.bool
    })
  })
};

CustomerDetailsContainer.defaultProps = {
  state: {
    data: {}
  }
};
