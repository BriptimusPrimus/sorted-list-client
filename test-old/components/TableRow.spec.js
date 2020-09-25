import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../client/components/table/TableRow';

describe('<TableRow/>', () => {
  const row = {
    id: '10027',
    firstName: 'TERESA DE JESUS',
    surname: 'JOFRE',
    surname2: 'GARFIAS',
    codeNumber: '10027',
    rfc: 'JOGT000101',
    status: 'hired'
  }
  const wrapper = shallow(<TableRow row={row}/>);
  const cells = wrapper.find('td');

  it('should render as a table row', () => {
    expect(wrapper.type()).to.equal('tr');
  });

  it('should have 5 table cells', () => {
    expect(wrapper.find('td')).to.have.length(5);
  });

  it('should render first name', () => {
    expect(cells.at(0).text()).to.equal(row.firstName);
  });

  it('should render surname', () => {
    expect(cells.at(1).text()).to.equal(row.surname + '-' + row.surname2);
  });

  it('should render code number', () => {
    expect(cells.at(2).text()).to.equal(row.codeNumber);
  });

  it('should render rfc', () => {
    expect(cells.at(3).text()).to.equal(row.rfc);
  });

  it('should render status', () => {
    expect(cells.at(4).text()).to.equal('Hired');
  });

  it('should not render content when no props are passed', () => {
    const noPropsWrapper = shallow(<TableRow/>);
    const emptyCells = noPropsWrapper.find('td');
    expect(emptyCells.at(0).text()).to.equal('');
  });
});