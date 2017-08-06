import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import RoutesTableHeader from './RoutesTableHeader';

class RoutesTable extends Component {
    constructor(props) {
        super();
        this.state = {
            data: props.routes,
            selected: []
        };
    }
    handleSort(key) {
        const orderBy = key;
        let order = 'desc';

        if (this.state.orderBy === key && this.state.order === 'desc') {
            order = 'asc';
        }
        const data = this.state.data.sort(
            (a, b) => (order === 'desc' ? b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy])
        );

        this.setState({ data, order, orderBy });
    }
    handleClick(route) {
        let selected = this.state.selected,
            index = this.state.selected.indexOf(route);

        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected = [...this.state.selected, route];
        }

        this.setState({ selected });
    }
    render() {
        const headers = [
            { sort: false, title: '', numeric: false, key: 'checkbox' },
            { sort: false, title: 'Route #', numeric: true, key: 'route' },
            { sort: true, title: 'Median Age', numeric: true, key: 'median_age' },
            { sort: true, title: 'Median Income', numeric: true, key: 'median_income' },
            { sort: true, title: 'Household Size', numeric: true, key: 'avg_household_size' },
            { sort: true, title: 'Businesses', numeric: true, key: 'business' },
            { sort: true, title: 'Residential', numeric: true, key: 'residential' },
        ]
        return (
            <Paper>
                <h1>Selected Routes: {this.state.selected.map(route => route + ' ')}</h1>
                <Table>
                    <RoutesTableHeader 
                        headers={headers} 
                        handleSort={this.handleSort.bind(this)}
                        orderBy={this.state.orderBy}
                        order={this.state.order}/>
                    <TableBody>
                        {this.state.data.map(n => {
                            return (
                                <TableRow key={n.route}
                                    onClick={() => this.handleClick(n.route)}>
                                    <TableCell checkbox>
                                        <Checkbox checked={this.state.selected.indexOf(n.route) > -1} />
                                    </TableCell>
                                    <TableCell>
                                        {n.route || 'N/A'}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.median_age || 'N/A'}
                                    </TableCell>
                                    <TableCell numeric>
                                        {`$${n.median_income}`}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.avg_household_size || 'N/A'}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.business || 'N/A'}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.residential || 'N/A'}
                                    </TableCell>                                    
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

RoutesTable.PropTypes = {
    routes: PropTypes.array.isRequired
}

export default RoutesTable;


