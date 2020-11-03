/*
 * action types
 */

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_DATA_ERROR = 'RECEIVE_DATA_ERROR';
export const SORT_BY_COLUMN = 'SORT_BY_COLUMN';

/*
 * action creators
 */

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  };
}

export function receiveDataError(reason) {
  return {
    type: RECEIVE_DATA_ERROR,
    reason
  };
}

export function sortByColumn(column) {
  return {
    type: SORT_BY_COLUMN,
    column
  };
}
