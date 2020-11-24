import React, { useReducer, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import reducer from '../reducers';

const withUniversalLoad = function withUniversalLoad(
  WrappedComponent,
  { dataSource, dataSourceParams, successAction, failureAction }
) {
  const withUniversalLoadComponent = ({ initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const params = useParams();
    const query = new URLSearchParams(useLocation().search);

    const fetchOpts = Object.keys(dataSourceParams).reduce((acum, curr) => {
      const resolveValue = key => {
        const dataSourceParam = dataSourceParams[key];
        if (dataSourceParam.inState) {
          return state[key];
        }
        if (dataSourceParam.inParams) {
          return params[key];
        }
        if (dataSourceParam.inQuery) {
          return query.get(dataSourceParam.paramName);
        }
        return dataSourceParam.value;
      };
      return {
        ...acum,
        [curr]: resolveValue(curr)
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
