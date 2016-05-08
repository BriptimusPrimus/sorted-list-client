import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MainArea from './components/MainArea'; 

const data = [
  {
    name: 'Fido',
    ageYears: 0,
    agetMonths: 3,
    status: 'lost',
    lastSeenOn: '31/01/2015',
    lastSeenWhere: 'Parque Guanal',
    owner: 'camou'
  },
  {
    name: 'Connie',
    ageYears: 2,
    agetMonths: 5,
    status: 'lost',
    lastSeenOn: '16/01/2015',
    lastSeenWhere: 'Blv. Park. 234',
    owner: 'ppenchis'
  },
  {
    name: 'Donatello',
    ageYears: 0,
    agetMonths: 9,
    status: 'lost',
    lastSeenOn: 'Donatello',
    lastSeenWhere: 'The backyard',
    owner: 'rushysts'
  }
];

ReactDOM.render(
  <MainArea data={data}/>,
  document.getElementById('app')
);