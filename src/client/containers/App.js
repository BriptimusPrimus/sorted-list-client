import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../routes';

const foo = {
  dummyData: {
    rows: [
      {
        id: '10027',
        firstName: 'TERESA DE JESUS',
        surname: 'JOFRE',
        surname2: 'GARFIAS',
        codeNumber: '10027',
        rfc: 'JOGT000101',
        status: 'hired'
      },
      {
        id: '11542',
        firstName: 'JUAN MANUEL',
        surname: 'NAJERA',
        surname2: 'PEREZ',
        codeNumber: '11542',
        rfc: 'NAPJ701211',
        status: 'hired'
      },
      {
        id: '42837',
        firstName: 'MARCOS',
        surname: 'ZARATE',
        surname2: 'MARIN',
        codeNumber: '42837',
        rfc: 'ZAMM570504',
        status: 'hired'
      }
    ]
  },
  data: {
    list: []
  },
  sortBy: {
    column: 'code',
    orderDesc: true
  }
};

const App = ({ initialState }) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route path={route.path} key={route.key}>
          <route.component initialState={initialState} />
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
  initialState: {
    data: {
      list: []
    },
    sortBy: {
      column: 'code',
      orderDesc: false
    }
  }
};