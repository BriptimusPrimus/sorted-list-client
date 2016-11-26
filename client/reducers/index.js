import {
  RECEIVE_DATA,
  SORT_BY_COLUMN
} from '../actions';

const initialState = {
  dummyData: {
    rows: [
      {
        id: '10027',
        firstName: 'TERESA DE JESUS',
        surname: 'JOFRE',
        surname2: 'GARFIAS', 
        codeNumber: '10027',
        rfc: 'JOGT000101',
        status: 'hired'
      },
      {
        id: '11542',
        firstName: 'JUAN MANUEL',
        surname: 'NAJERA',
        surname2: 'PEREZ', 
        codeNumber: '11542',
        rfc: 'NAPJ701211',
        status: 'hired'
      },
      {
        id: '42837',
        firstName: 'MARCOS',
        surname: 'ZARATE',
        surname2: 'MARIN', 
        codeNumber: '42837',
        rfc: 'ZAMM570504',
        status: 'hired'
      }
    ]    
  },
  data: {
    list: []
  },
  sortBy: {
    column: 'name',
    orderDesc: true
  }
}

function dummyData(state={}, action) {
  return state;
}

function data(state=initialState.data, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data
    default:
      return state
  }
}

function sortBy(state=initialState.sortBy, action) {
  var isDesc;
  switch (action.type) {
    case SORT_BY_COLUMN:
      isDesc = action.column === state.column ?
        !state.orderDesc : true;
      return {
        column: action.column,
        orderDesc: isDesc
      };
    default:
      return state;
  }
}

export default function reducer(state = initialState, action) {
  return {
    dummyData: dummyData(state.dummyData, action),
    data: data(state.data, action),
    sortBy: sortBy(state.sortBy, action)
  }
}
