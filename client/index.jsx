import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'

let store = createStore(reducer);

console.log('INITIATE APP');

// Render app
ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);

export default true;
