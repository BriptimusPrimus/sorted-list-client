import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import {receiveData} from './actions';
import * as dataService from './services/data';

const store = createStore(reducer);

console.log('INITIATE APP');

// Render app
ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
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
