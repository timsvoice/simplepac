import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ZipLookup from './ZipLookup';
import RoutesTable from './RoutesTable/RoutesTable';
import { CircularProgress } from 'material-ui/Progress';
import rp from 'request-promise';
import config from './config';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { routes: [], loading: true };
    }
    handleZipLookupSubmit(zipcode) {
        rp({
            method: 'POST',
            uri: `${config.baseUrl()}/routes/${zipcode}`,
            json: true
        })
        .then(res => {
            const { routes } = res;
            this.setState({ routes, loading: false });
        })
        .catch(err => console.log(err));
    }
    render() {
        const table = this.state.loading ? <CircularProgress /> : <RoutesTable routes={this.state.routes} />;
        
        return (
			<div className="App">
                <MuiThemeProvider>
                    <Grid container align='center' direction='row' justify='center'>
                        <Grid item xs={6}>
				            <ZipLookup handleSubmit={this.handleZipLookupSubmit.bind(this)}/>
                        </Grid>
                        {table}
                    </Grid>
                </MuiThemeProvider>
			</div>
		);
	}
}

export default App;
