import React from 'react';
import { TextField } from '@material-ui/core';

const input = (props) => {
    return (
        <div className="input">
            <TextField {...props} label={props.label} type={props.type} />
        </div>
    )
}

export default input;