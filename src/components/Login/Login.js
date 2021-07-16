import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-solid-svg-icons';
import google from '../../images/google.webp'

const Login = () => {
    const handleBlur = ()=>{

    }
    return (
        <div className="container">
            <div className="backgroundColor">
                <Header />
                <br />
                <form className="sign-in-form" action="">
                    <h3>LogIn</h3>
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email" required />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                    <input className="btn btn-success" type="submit" value="LogIn" />
                    <p>Don't Have An Account? <Link to="/signUp">SignUp</Link></p>
                </form>
                <Link><div className="googleSignIn">
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