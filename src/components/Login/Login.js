import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-solid-svg-icons';
import google from '../../images/google.webp'
import { handleSignInWithEmailAndPassword, handleSignInWithGoogle, initializeFramework } from './LoginManager';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useState } from 'react';

const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
        photo: ''
    });

    initializeFramework();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const SignInWithGoogle = () => {
        handleSignInWithGoogle()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }
    const handleBlur = (e) => {
            const newUserInfo ={...user}
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo);
            console.log(user);
    }
    const handleLogIn =(e)=>{
        if(user.email && user.password){
            handleSignInWithEmailAndPassword(user.email,user.password)
            .then(res =>{
                setLoggedInUser(res);
                history.replace(from);
            })
        }
        e.preventDefault()
    }
    console.log(loggedInUser.displayName)

    return (
        <div className="container">
            <div className="backgroundContent">
                <Header />
                <br />
                <div className="sign-in-form">
                    <h3>LogIn</h3>
                    <form onSubmit={handleLogIn} >
                        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email" required />
                        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                        <input className="btn btn-success" type="submit" value="LogIn" />
                        <br />
                    </form>
                    <p>Don't Have An Account? <Link to="/signUp">SignUp</Link></p>
                </div>
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