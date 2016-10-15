import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../src/components/table/TableRow';

describe('<TableRow/>', () => {
  it('should render as a table row', () => {
    const wrapper = shallow(<TableRow/>);
    expect(wrapper.type()).to.equal('tr');
  });

  it('should not have any properties', () => {
    const wrapper = shallow(<TableRow/>);
    expect(wrapper.props().row).to.not.exist;
  });

  it('should contain 5 table cells', () => {
    const wrapper = shallow(<TableRow/>);
    expect(wrapper.find('td')).to.have.length(5);
  });
});