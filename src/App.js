import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors/indigo';
import LoginPage from './containers/login/LoginPage';
import AppMenu from './components/AppMenu';

const theme = createMuiTheme({
    palette: {
        primary: indigo
    }
})

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <AppMenu />
                    <div id="appContent">
                        <LoginPage />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;
