import React from 'react';

const pageTitle = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.subtitle}</div>
        </div>
    )
}

export default pageTitle;