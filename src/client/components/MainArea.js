import React from 'react';
import DataTable from './table/DataTable';

const MainArea = ({ data, sortBy, onSetSortColumn }) => {
  return (
    <div className='panel panel-default row'>
      <div className='col-xs-0 col-sm-1 col-md-2'></div>
      <section className='col-xs-12 col-sm-10 col-md-8'>
        <h2 className='text-primary text-center'>Sorted List with Data</h2>
        <div className='well'>
          <DataTable
            data={data}
            sortBy={sortBy}
            onSetSortColumn={onSetSortColumn}
          />
        </div>
      </section>
      <div className='col-xs-0 col-sm-1 col-md-2'></div>
    </div>
  );
};

export default MainArea;
