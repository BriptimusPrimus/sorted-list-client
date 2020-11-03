import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../routes';

const resolveState = function resolveState(initialState) {
  const defaultState = {
    data: {
      list: []
    },
    sortBy: {
      column: 'code',
      orderDesc: true
    }
  };
  return {
    ...defaultState,
    ...initialState
  };
};

const App = ({ initialState }) => {
  const state = resolveState(initialState);
  return (
    <Switch>
      {routes.map(route => (
        <Route path={route.path} key={route.key}>
          <route.component initialState={state} />
        </Route>
      ))}
    </Switch>
  );
};

export default App;

App.propTypes = {
  initialState: PropTypes.shape({
    data: PropTypes.shape({
      list: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string,
          surname: PropTypes.string,
          surname2: PropTypes.string,
          codeNumber: PropTypes.string,
          rfc: PropTypes.string,
          status: PropTypes.string
        })
      )
    }),
    sortBy: PropTypes.shape({
      column: PropTypes.string,
      orderDesc: PropTypes.bool
    })
  })
};

App.defaultProps = {
  initialState: {}
};
