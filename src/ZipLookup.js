import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControl from 'material-ui/Form/FormControl';

class ZipLookup extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: null,
            error: null
        };
    }
    handleZipcodeChange(e) {
        const zipcode = e.target.value 
        this.setState({ zipcode, error: null });
    }
    handleZipcodeSubmit(e) {
        e.preventDefault();

        if (this.state.zipcode.length < 5) {
            return this.setState({ 
                error: <FormHelperText>Zipcodes Must have 5 Digits</FormHelperText> 
            })
        }
        
        this.props.handleSubmit(this.state.zipcode);
    }
    render() {
        return (
            <form onSubmit={this.handleZipcodeSubmit.bind(this)} >
            <FormControl error={this.state.error}>
                <TextField 
                    id="zipcode" 
                    label="Zipcode" 
                    onChange={this.handleZipcodeChange.bind(this)}
                    error={this.state.error}/>
                {this.state.error}
            </FormControl>
            </form>
        );
    }
}

ZipLookup.PropTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default ZipLookup;
