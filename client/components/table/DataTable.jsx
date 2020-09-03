import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class DataTable extends React.Component {
  render() {
    return(
      <table className="table table-striped table-condensed table-bordered">
        <TableHeader
          sortBy={this.props.sortBy}
          onSetSortColumn = {this.props.onSetSortColumn}
        />
        <TableBody data={this.props.data}/>
      </table>
    );
  }
}