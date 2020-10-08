import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import DataSection from './MainArea';

const MainView = ({ data = {}, sortBy = {}, onSetSortColumn }) => {
  const rows = data.list || [];
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
