import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from './ListContainer';

const initialState = {
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

const App = () => {
  return (
    <Switch>
      <Route path='/'>
        <ListContainer initialState={initialState} />
      </Route>
    </Switch>
  );
};

export default App;
