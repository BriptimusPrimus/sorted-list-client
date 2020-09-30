import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import MainContainer from '../containers/MainContainer'

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <MainContainer />
      </Route>
    </Switch>
  );
}

export default App;