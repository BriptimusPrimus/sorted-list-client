import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from '../../src/components/table/TableHeader';

describe('<TableHeader/>', () => {
  const wrapper = shallow(<TableHeader/>);

  it('should render as a table header', () => {
    expect(wrapper.type()).to.equal('thead');
  });

  it('should have 1 row', () => {
    expect(wrapper.find('tr')).to.have.length(1);
  });

  it('should have 5 header cells', () => {
    expect(wrapper.find('th')).to.have.length(5);
  });

  it('should have text centered header cells', () => {
    expect(wrapper.find('th.text-center')).to.have.length(5);
  });  
});