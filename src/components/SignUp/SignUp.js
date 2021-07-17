import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './SignUp.css';
import google from '../../images/google.webp'
import { handleCreateUserWithEmailAndPassword, handleSignInWithEmailAndPassword, handleSignInWithGoogle, initializeFramework } from '../Login/LoginManager';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useState } from 'react';
import { useForm } from 'react-hook-form';



const SignUp = () => {
    initializeFramework();
     const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
        photo: ''
    });
    const { from } = location.state || { from: { pathname: "/" } };

    const SignInWithGoogle = () => {
        handleSignInWithGoogle()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            // const nameValid = e.target.value;
            isFieldValid = /^[^\s@]+@[^\s@]+$/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(password !== confirmPassword){
            isFieldValid= false;
            alert("password don't match")
        }else{
            isFieldValid=true;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
        }

    }
    const handleFormSubmit = (e) => {
        if (user.email && user.password) {
            handleCreateUserWithEmailAndPassword(name,user.email, user.password)
                .then(res => {
                    setLoggedInUser(res);
                    setUser(res);
                    history.replace(from);
                    console.log(res);
                })
        }
        e.preventDefault();

    }

    return (
        <div className="container">
            <div className="backgroundColor">
                <Header />
                <br />
                <div className="signInForm">
                    <h4>Create Account</h4>
                    <form onSubmit={handleFormSubmit} >
                        <input type="text" name="name" placeholder="Your Name"onBlur={(e)=>{
                            setName(e.target.value)
                        }} required />
                        <input type="text" name="email" placeholder="Your Email" onBlur={handleBlur} required />
                        <input type="password" name="password" placeholder="Your Password" onBlur={handleBlur} onChange={e=>{setPassword(e.target.value)}} required />
                        <input type="password" name="password" placeholder="Confirm Password" onBlur={handleBlur} onChange={e=>{setConfirmPassword(e.target.value)}} required />
                        <input type="submit" className="btn btn-success" />
                    </form>
                    <p>Already Have An Account? <Link to="/login">LogIn</Link></p>
                </div>
                {
                    user.success?history.replace(from): <p>{user.error}</p>
                }

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

export default SignUp;
