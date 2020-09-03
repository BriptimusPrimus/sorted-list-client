import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import style from '../css/app.css';
import DataSection from './MainArea';

const MainView = (props) => {
  const data = props.data || {};
  const rows = data.list || [];
  const sortBy = props.sortBy || {};
  return(
    <div id="main-view">
      <DataSection
        data={rows}
        sortBy={sortBy}
        onSetSortColumn = {props.onSetSortColumn}
      />
    </div>
  );
}

export default MainView;