import React, { Component } from 'react';
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';
import Input from '../../components/inputs/input';
import { FormControl } from '@material-ui/core';

class LoginForm extends Component {

    render() {
        return (
            <div>
                <FormControl noValidate autoComplete="off">
                    <Input required label="Login" type="Number" />
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

export default LoginForm;