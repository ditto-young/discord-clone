import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import React from 'react';
import "./Login.css";


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error => alert(error.message)));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://w.namu.la/s/fdabc94d068e94bbd808fbbd16ff611f9e012bcda30143680d5e19a219c15f55ea3d0568752d1c1de1af7c13d250ad1be6ea1a6df41101114a218cebbc0a802aa6d9aba3ceea240858232e465dbb83f25c4aaac4424aef0c8db4d56ea60e7479"
                    alt=""
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
