import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';
import PageTitle from '../../components/pageTitle';
import Input from '../../components/input'; 
import { FormControl } from '@material-ui/core';

class Login extends Component {

    render() {
        return (
            <div>
                <PageTitle title="Personal Banking Login" subtitle="Enter your account number and password" />
                <FormControl noValidate autoComplete="off">
                    <Input required label="Account number" type="Number" />
                    <Input required label="Password" type="password" />
                    <Button variant="raised" color="primary" onClick={this.props.onLogin}>
                        Access my account
                    </Button>
                    <br />
                    <Button variant="raised" color="primary" onClick={this.props.onLogout}>
                        Exit
                    </Button>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary" />
                        }
                        label="Remember me"
                    />
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch({ type: 'LOGIN' }),
        onLogout: () => dispatch({ type: 'LOGOUT' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
