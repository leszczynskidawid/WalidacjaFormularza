import React from 'react';

  

const ErrorsMessagesComponents = ({errorStatus, incorrectMessage}) => {
    return (
            <span>{errorStatus ? <p>{incorrectMessage}</p> : null}</span>
    )
     
};

export default ErrorsMessagesComponents;