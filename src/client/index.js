import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import App from './components/';

import reducer from './reducers';
import {receiveData} from './actions';
import * as dataService from './services/data';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

export default true;

// trigger initial request to the server
const fetchOpts = {
  sortBy: store.getState().sortBy
}
dataService.getEmployees(fetchOpts)
  .then(function fullfilled(data) {
    store.dispatch(receiveData(data));
    console.log('state:', store.getState());
  })
  .catch(function rejected(reason) {
    // store.dispatch(receiveDataError(reason));
    console.log('response error:', reason);
    console.log('state:', store.getState());
  })
