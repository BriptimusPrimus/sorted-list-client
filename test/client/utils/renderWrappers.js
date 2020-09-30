import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getInitialState } from './dataMocks';

// Import your own reducer
import reducer from '../../../src/client/reducers';

const defaultInitialState = getInitialState();

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