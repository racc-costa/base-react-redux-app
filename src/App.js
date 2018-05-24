import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors/indigo';
import Login from './containers/login/Login';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Your Bank!
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <div id="appContent">
                        <Login />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>

        );
    }
}

export default App;
