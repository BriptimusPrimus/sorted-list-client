import React from 'react';
import { shallow } from 'enzyme';
import TableBody from '../../src/components/table/TableBody';
import TableRow from '../../src/components/table/TableRow';

describe('<TableBody/>', () => {
  const data = [
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
  ];

  const wrapper = shallow(<TableBody data={data}/>);

  it('should render as a table body', () => {
    expect(wrapper.type()).to.equal('tbody');
  });

  it('should contain 3 table rows', () => {
    expect(wrapper.find(TableRow)).to.have.length(3);
  });

  it('should not contain rows when no properties are passed', () => {
    const noRowsWrapper = shallow(<TableBody/>);
    expect(noRowsWrapper.find(TableRow)).to.have.length(0);
  });    
});