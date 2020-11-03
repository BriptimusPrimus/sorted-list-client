import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__;

// Allow the passed state to be garbage-collected
// eslint-disable-next-line no-underscore-dangle
delete window.__INITIAL_STATE__;

ReactDOM.hydrate(
  <BrowserRouter>
    <App initialState={initialState} />
  </BrowserRouter>,
  document.getElementById('root')
);

export default true;
