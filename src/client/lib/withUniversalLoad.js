import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';

const withUniversalLoad = function withUniversalLoad(
  WrappedComponent,
  { dataSource, dataSourceParams, successAction, failureAction }
) {
  const withUniversalLoadComponent = ({ initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchOpts = Object.keys(dataSourceParams).reduce((res, key) => {
      return {
        ...res,
        [key]: dataSourceParams[key].inState
          ? state[key]
          : dataSourceParams[key].value
      };
    }, {});

    useEffect(() => {
      // trigger initial request to the server
      dataSource(fetchOpts)
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

  withUniversalLoadComponent.loadData = function loadData(params) {
    return dataSource(params);
  };

  return withUniversalLoadComponent;
};

export default withUniversalLoad;
