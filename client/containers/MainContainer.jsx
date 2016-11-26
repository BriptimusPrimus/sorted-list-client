import { connect } from 'react-redux';
import MainView from '../components/MainView';
import {sortByColumn} from '../actions';

const mapStateToProps = (state) => {
  return {
    dummyData: state.dummyData,
    data: state.data,
    sortBy: state.sortBy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSortColumn: (column) => {
      dispatch(sortByColumn(column));
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)

export default MainContainer;