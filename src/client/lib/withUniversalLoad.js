import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';

const withUniversalLoad = function withUniversalLoad(
  WrappedComponent,
  { dataSource, dataSourceParams, successAction, failureAction }
) {
  const withUniversalLoadComponent = ({ initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      // trigger initial request to the server
      dataSource(dataSourceParams)
        .then(function fullfilled(data) {
          dispatch(successAction(data));
        })
        .catch(function rejected(reason) {
          // eslint-disable-next-line no-console
          console.error('response error:', reason);
          dispatch(failureAction(reason));
        });
    }, []); // This effect never re-runs

    return <WrappedComponent state={state} dispatch={dispatch} />;
  };

  withUniversalLoadComponent.loadData = function loadData() {
    return dataSource(dataSourceParams);
  };

  return withUniversalLoadComponent;
};

export default withUniversalLoad;
