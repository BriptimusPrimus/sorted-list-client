import dataService from '../services/data';
import {sortByColumn} from '../actions';

function sortBy(dispatchFn, column) {
  const fetchOpts = {
    sortBy: store.getState().sortBy
  };  
  
  dispatchFn(sortByColumn(column));
  dataService.getEmployees(fetchOpts)
    .then(function fullfilled(data) {
      store.dispatch(receiveData(data));
    })
    .catch(function rejected(reason) {
      console.log('response error:', reason);
    })
}

export default {
  sortBy
}