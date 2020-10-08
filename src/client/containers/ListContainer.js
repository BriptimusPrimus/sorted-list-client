import React, { useReducer, useEffect } from 'react';
import MainView from '../components/MainView';
import { sortByColumn, receiveData } from '../actions';
import reducer from '../reducers';
import { getEmployees } from '../services/data';

const ListContainer = ({ initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // trigger initial request to the server
        const fetchOpts = {
          sortBy: state.sortBy
        }
        getEmployees(fetchOpts)
          .then(function fullfilled(data) {
            dispatch(receiveData(data));
            console.log('state:', state);
          })
          .catch(function rejected(reason) {
            // dispatch(receiveDataError(reason));
            console.log('response error:', reason);
            console.log('state:', state);
          })
      }, []); // This effect never re-runs

    const onSetSortColumn = (column, orderDesc) => {
        const fetchOpts = {
            sortBy: {
                column,
                orderDesc
            }
        };
        getEmployees(fetchOpts)
            .then(function fullfilled(data) {
                dispatch(sortByColumn(column));
                dispatch(receiveData(data));
            })
            .catch(function rejected(reason) {
                console.log('response error:', reason);
            });
    };

    return (
        <MainView
            data={state.data}
            sortBy={state.sortBy}
            onSetSortColumn={onSetSortColumn}
        />
    );
};

export default ListContainer;