import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Import your own reducer
import reducer from '../../../client/reducers';

const defaultInitialState = {
    dummyData: {},
    data: {
        list: [
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
    sortBy: {
        column: 'code',
        orderDesc: false
    }    
};

// https://redux.js.org/recipes/writing-tests#connected-components
function renderWithRedux(
    ui,
    {
      initialState = defaultInitialState,
      store = createStore(reducer, initialState)
    } = {}
  ) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details)
        store
    }
  }
  
  export { renderWithRedux }