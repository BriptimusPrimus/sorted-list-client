import React from 'react';
import PropTypes from 'prop-types';

const DataTable = ({ data }) => {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td className="details-key">Name:</td>
          <td>
            {data.firstName} {data.surname}
          </td>
        </tr>
        <tr>
          <td className="details-key">Email:</td>
          <td>{data.email}</td>
        </tr>
        <tr>
          <td className="details-key">Phone number:</td>
          <td>{data.phone}</td>
        </tr>
        <tr>
          <td className="details-key">Address:</td>
          <td>{data.address}</td>
        </tr>
        <tr>
          <td className="details-key">City:</td>
          <td>{data.city}</td>
        </tr>
        <tr>
          <td className="details-key">District:</td>
          <td>{data.district}</td>
        </tr>
        <tr>
          <td className="details-key">Country:</td>
          <td>{data.country}</td>
        </tr>
        <tr>
          <td className="details-key">Postal code:</td>
          <td>{data.postalCode}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;

DataTable.propTypes = {
  data: PropTypes.shape({
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

DataTable.defaultProps = {
  data: {}
};
