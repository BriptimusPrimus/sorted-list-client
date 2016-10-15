import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../src/components/table/TableRow';

describe('<TableRow/>', () => {
  const wrapper = shallow(<TableRow/>);

  it('should render as a table row', () => {
    expect(wrapper.type()).to.equal('tr');
  });

  it('should contain 5 table cells', () => {
    expect(wrapper.find('td')).to.have.length(5);
  });

  it('should not have any properties', () => {
    expect(wrapper.props().row).to.not.exist;
  });
});