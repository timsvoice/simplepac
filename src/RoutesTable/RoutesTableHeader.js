import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';

class RoutesTableHeader extends Component {
    handleClick(header) {
        if (header.sort) return this.props.handleSort(header.key);
    }
    render() {
        const { headers, order, orderBy } = this.props;
        return (
            <TableHead>
                <TableRow>
                    {headers.map(header => (
                        <TableCell
                            key={header.key}
                            numeric={header.numeric}>
                            <TableSortLabel
                                active={orderBy === header.key}
                                direction={order}
                                onClick={() => this.handleClick(header)}
                            >
                                {header.title}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }
}

RoutesTableHeader.PropTypes = {
    headers: PropTypes.array.isRequired,
    handleSort: PropTypes.func,
    orderBy: PropTypes.bool,
    order: PropTypes.string,
}

export default RoutesTableHeader;


