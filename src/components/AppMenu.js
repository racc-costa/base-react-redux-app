import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { menuItems } from './menuItems';
import './AppMenu.css';

const styles = {
    list: {
        width: 250,
    },
};

class AppMenu extends Component {
    state = {
        drawerOpen: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            drawerOpen: open
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{menuItems}</List>
            </div>
        );

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.toggleDrawer(true)} />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Your App!
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer disableBackdropTransition open={this.state.drawerOpen} onClose={this.toggleDrawer(false)} 
                onOpen={this.toggleDrawer(true)} >
                    <div
                        tabIndex={0} role="button"
                        onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)} >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

AppMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppMenu);