import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './SignUp.css';
import google from '../../images/google.webp'
import { useContext } from 'react';
import { userContext } from '../../App';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";



const SignUp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(res => {
                setLoggedInUser(res.user);
                history.replace(from);
                console.log(loggedInUser);

                // ...
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const isInvalid = (firstName === '')|| (emailAddress === '' )  || password === '';

    const handleFormSubmit = (e) => {

        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(res => {
                const user = res.user;
                user.updateProfile({
                    displayName: firstName
                })
                .then(() => {
                    setLoggedInUser(res.user);
                    history.replace(from);
                })
                console.log(res.user);
            })
            .catch(err => {
                setEmailAddress('');
                setPassword('');
                setError(err.message)
            });


    }

    return (
        <div className="container">
            <div className="backgroundColor">
                <Header />
                <br />
                <div className="signInForm">
                    <h4>Create Account</h4>
                    <form onSubmit={handleFormSubmit} >
                        <input
                            type="text"
                            name="name"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            required />
                        <input
                            type="text"
                            name="email"
                            value={emailAddress}
                            onChange={e => setEmailAddress(e.target.value)}
                            placeholder="Your Email"
                            required />
                        <input
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            onChange={e => { setPassword(e.target.value) }}
                            required />
                        {/* <input type="password" name="password" placeholder="Confirm Password" onBlur={handleBlur} onChange={e=>{setConfirmPassword(e.target.value)}} required /> */}
                        <input
                            className="btn btn-success"
                            type="submit"
                            disabled={isInvalid}
                            value="Sign-Up"
                        />
                    </form>
                    <p>Already Have An Account? <Link to="/login">LogIn</Link></p>
                </div>
                <p>{error}</p>

                <Link onClick={SignInWithGoogle}><div className="googleSignIn">
                    <div>
                        <img className="image" src={google} alt="" />
                        <p>Continue With Google</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
