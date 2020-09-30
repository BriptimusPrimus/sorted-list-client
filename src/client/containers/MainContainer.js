import { connect } from 'react-redux';
import MainView from '../components/MainView';
import {sortByColumn, receiveData} from '../actions';
import { getEmployees } from '../services/data';

const mapStateToProps = (state) => {
  return {
    dummyData: state.dummyData,
    data: state.data,
    sortBy: state.sortBy
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSortColumn: (column, orderDesc) => {
      const fetchOpts = {
        sortBy: {
          column,
          orderDesc
        }
      };
      getEmployees(fetchOpts)
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