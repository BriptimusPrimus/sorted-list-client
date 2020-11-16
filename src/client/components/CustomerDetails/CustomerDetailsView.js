import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css';
import DataTable from './DataTable';

const CustomersDetailsView = ({ customer }) => {
  return (
    <div className="panel panel-default row">
      <div className="col-xs-0 col-sm-1 col-md-2" />
      <section className="col-xs-12 col-sm-10 col-md-8">
        <h2 className="text-primary text-center">Customer Details</h2>
        <div className="well row">
          <DataTable data={customer} />
        </div>
      </section>
      <div className="col-xs-0 col-sm-1 col-md-2" />
    </div>
  );
};

export default CustomersDetailsView;

CustomersDetailsView.propTypes = {
  customer: PropTypes.shape({
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
  })
};

CustomersDetailsView.defaultProps = {
  customer: {}
};
