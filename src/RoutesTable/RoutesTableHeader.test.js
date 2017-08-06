import React from 'react';
import { shallow, mount } from 'enzyme';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import RoutesTableHeader from './RoutesTableHeader';

describe('<RouteTableHeader/>', () => {
    const component = shallow(<RoutesTableHeader headers={[{name: 'header1', numeric: false}]}/>)
    it('should fire the sort function', () => {
        const cell = component.find(TableCell);
        cell.simulate('click');
    })
})