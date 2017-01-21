import { connect } from 'react-redux';
import MainView from '../components/MainView';
import {sortByColumn, receiveData} from '../actions';
import dataService from '../services/data';

const mapStateToProps = (state) => {
  return {
    dummyData: state.dummyData,
    data: state.data,
    sortBy: state.sortBy
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetSortColumn: (column, orderDesc) => {
      console.log('mapDispatchToProps::ownProps:', ownProps);
      const fetchOpts = {
        sortBy: {
          column,
          orderDesc
        }
      };
      dataService.getEmployees(fetchOpts)
        .then(function fullfilled(data) {
          dispatch(sortByColumn(column));
          dispatch(receiveData(data));
        })
        .catch(function rejected(reason) {
          console.log('response error:', reason);
        });
    }
  };
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)

export default MainContainer;