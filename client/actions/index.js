/*
 * action types
 */

export const RECEIVE_DATA = 'RECEIVE_DATA';

/*
 * action creators
 */

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}