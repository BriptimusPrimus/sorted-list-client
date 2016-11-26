import React from 'react';
import DataTable from './table/DataTable';

export default React.createClass({
  render: function() {
    return(
      <div className="panel panel-default row">
        <div className="col-xs-0 col-sm-1 col-md-2"></div>
        <section className="col-xs-12 col-sm-10 col-md-8">
          <h2 className="text-primary text-center">Sorted List with Data</h2>
          <div className="well">
            <DataTable
              data={this.props.data}
              sortBy={this.props.sortBy}
              onSetSortColumn = {this.props.onSetSortColumn}
            />
          </div>
        </section>
        <div className="col-xs-0 col-sm-1 col-md-2"></div>
      </div>
    );
  }
});