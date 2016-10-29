import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import DataSection from './MainArea';

const MainView = (props) => {
  const data = props.dummyData || {};
  const rows = data.rows || [];
  return(
    <div id="main-view">
      <DataSection data={rows}/>
    </div>
  );
}

export default MainView;