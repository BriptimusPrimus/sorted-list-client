import React from 'react';
import { shallow } from 'enzyme';
import DataTable from '../../src/components/table/DataTable';
import TableHeader from '../../src/components/table/TableHeader';
import TableBody from '../../src/components/table/TableBody';

describe('<DataTable/>', () => {
  const wrapper = shallow(<DataTable/>);

  it('should render as a table', () => {
    expect(wrapper.type()).to.equal('table');
  });

  it('should contain a <TableHeader/>', () => {
    expect(wrapper.find(TableHeader)).to.have.length(1);
  });

  it('should contain a <TableBody/>', () => {
    expect(wrapper.find(TableBody)).to.have.length(1);
  });  
});