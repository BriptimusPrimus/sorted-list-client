import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css';
import DataTable from './DataTable';

const CustomersView = ({ data, sortBy, onSetSortColumn }) => {
  return (
    <div className="panel panel-default row">
      <div className="col-xs-0 col-sm-1 col-md-2" />
      <section className="col-xs-12 col-sm-10 col-md-8">
        <h2 className="text-primary text-center">Customers list</h2>
        <div className="well row">
          <DataTable
            data={data.customers}
            sortBy={sortBy}
            onSetSortColumn={onSetSortColumn}
          />
        </div>
      </section>
      <div className="col-xs-0 col-sm-1 col-md-2" />
    </div>
  );
};

export default CustomersView;

CustomersView.propTypes = {
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
  }),
  onSetSortColumn: PropTypes.func
};

CustomersView.defaultProps = {
  data: {
    customers: []
  },
  sortBy: {},
  onSetSortColumn: () => {}
};
