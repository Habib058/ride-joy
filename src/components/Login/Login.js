import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Login.css'
import google from '../../images/google.webp'
import { useContext } from 'react';
import { userContext } from '../../App';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                
                setLoggedInUser(res.user);
                history.replace(from);
                console.log(loggedInUser);

                // ...
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    const isInvalid = emailAddress === '' || password === '';

    const handleLogIn = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(res => {
                setLoggedInUser(res.user);
                history.replace(from);
                console.log(res.user);
            })
            .catch(err => {
                setEmailAddress('');
                setPassword('');
                setError(err.message);

            })
    }

    return (
        <div className="container">
            <div className="backgroundContent">
                <Header />
                <br />
                <div className="sign-in-form">
                    <h3>LogIn</h3>
                    <form onSubmit={handleLogIn} >
                        <input
                            type="text"
                            name="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            placeholder="Your Email"
                            required />
                        <input
                            type="password"
                            name="email"

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your Email"
                            required />
                        <input
                            className="btn btn-success"
                            type="submit"
                            disabled={isInvalid}
                            value="LogIn" />
                        <br />
                    </form>
                    <p>Don't Have An Account? <Link to="/signUp">SignUp</Link></p>
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <Link onClick={SignInWithGoogle}><div className="googleSignIn">
                    <div>
                        <img className="image" src={google} alt="" />
                        <p>Continue With Google</p>
                    </div>
                </div></Link>
            </div>
        </div>
    );
};

export default Login;