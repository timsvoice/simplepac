import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class RoutesTable extends Component {
    render() {
        const data = this.props.routes;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Route #</TableCell>
                            <TableCell>Median Age</TableCell>
                            <TableCell numeric>Median Income</TableCell>
                            <TableCell numeric>Household Size</TableCell>
                            <TableCell numeric>Businesses</TableCell>
                            <TableCell numeric>Residential</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.route}>
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


