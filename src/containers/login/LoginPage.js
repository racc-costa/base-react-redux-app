import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/ActionsTypes';
import PageTitle from '../../components/pageTitle';
import LoginForm from './LoginForm';

class Login extends Component {

    render() {
        return (
            <div>
                <PageTitle title="Personal App Login" subtitle="Enter your login and password" />
                <LoginForm onLogin={this.props.onLogin} onLogout={this.props.onLogout}  />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch({type: actionTypes.LOGIN}),
        onLogout: () => dispatch({type: actionTypes.LOGOUT}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
