import { RECEIVE_DATA, SORT_BY_COLUMN } from '../actions';

const dummyData = function dummyData(state = {}) {
  return state;
};

const data = function data(state, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data;
    default:
      return state;
  }
};

const sortBy = function sortBy(state, action) {
  const isDesc = action.column === state.column ? !state.orderDesc : true;
  switch (action.type) {
    case SORT_BY_COLUMN:
      return {
        column: action.column,
        orderDesc: isDesc
      };
    default:
      return state;
  }
};

const reducer = function reducer(state, action) {
  return {
    dummyData: dummyData(state.dummyData, action),
    data: data(state.data, action),
    sortBy: sortBy(state.sortBy, action)
  };
};

export default reducer;
