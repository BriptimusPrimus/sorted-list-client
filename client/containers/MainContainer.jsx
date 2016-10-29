import { connect } from 'react-redux';
import MainView from '../components/MainView';

const mapStateToProps = (state) => {
  return {
    dummyData: state.dummyData
  }
}

const MainContainer = connect(
  mapStateToProps
)(MainView)

export default MainContainer;