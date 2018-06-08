import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class AppMenu extends Component {

    render() {

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Your App!
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppMenu;