import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { login, logout } from '../actions/loginAction';

class Home extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Authenticated: {this.props.isAuthenticated.toString()}
                </p>
                <p className="App-intro">
                    Text: {this.props.text.toString()}
                </p>
                <Button variant="raised" color="primary" onClick={this.props.onLogin}>
                    Login
        </Button>
                <Button variant="raised" color="primary" onClick={this.props.onLogout}>
                    Logout
        </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.authenticated,
    text: state.login.text
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => login(),
    onLogout: () => logout()
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);