import React from 'react';
import { shallow } from 'enzyme';
import DataTable from '../../client/components/table/DataTable';
import TableHeader from '../../client/components/table/TableHeader';
import TableBody from '../../client/components/table/TableBody';

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