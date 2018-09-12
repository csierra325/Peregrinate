import React from 'react';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';

const responseGoogle = (response) => {
    console.log(response);
}

const CLIENT_ID = "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";

ReactDOM.render(
    <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
    />,
    document.getElementById('googleButton')
);

