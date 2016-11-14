import { connect } from 'react-redux';
import MainView from '../components/MainView';

const mapStateToProps = (state) => {
  return {
    dummyData: state.dummyData,
    data: state.data
  }
}

const MainContainer = connect(
  mapStateToProps
)(MainView)

export default MainContainer;