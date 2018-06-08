import React from 'react';
import { TextField } from '@material-ui/core';
import './input.css';

const input = (props) => {
    return (
        <div className="input">
            <TextField {...props} label={props.label} type={props.type} />
        </div>
    )
}

export default input;