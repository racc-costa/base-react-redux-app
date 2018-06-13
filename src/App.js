import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LOGIN, LOGOUT } from './actions/actionsTypes';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Authenticated: {this.props.isAuthenticated.toString()}
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({ type: LOGIN, payload: true }),
    onLogout: () => dispatch({ type: LOGOUT, payload: false })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);