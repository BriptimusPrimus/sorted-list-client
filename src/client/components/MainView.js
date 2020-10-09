import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import DataSection from './MainArea';

const MainView = ({ data, sortBy, onSetSortColumn }) => {
  const rows = data.list;
  return (
    <div id='main-view'>
      <DataSection
        data={rows}
        sortBy={sortBy}
        onSetSortColumn={onSetSortColumn}
      />
    </div>
  );
};

export default MainView;

MainView.propTypes = {
  data: PropTypes.shape({
    list: PropTypes.arrayOf({
      firstName: PropTypes.string,
      surname: PropTypes.string,
      surname2: PropTypes.string,
      codeNumber: PropTypes.string,
      rfc: PropTypes.string,
      status: PropTypes.string
    })
  }),
  sortBy: PropTypes.shape(
    PropTypes.shape({
      column: PropTypes.string,
      orderDesc: PropTypes.bool
    })
  ),
  onSetSortColumn: PropTypes.func
};

MainView.defaultProps = {
  data: {
    list: []
  },
  sortBy: {},
  onSetSortColumn: () => {}
};
