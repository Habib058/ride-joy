import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import css from './SignUp.css';
import google from '../../images/google.webp'

const SignUp = () => {
    const handleBlur = () => {

    }
    return (
        <div className="container">
            <div className="backgroundColor">
                <Header />
                <br />
                <form className="signInForm" action="">
                    <h4>Create An Account</h4>
                    <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" />
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email" required />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Confirm Password" required />
                    <input className="btn btn-success" type="submit" value="create an account" />
                    <p>Already Have An Account? <Link to="/login">LogIn</Link></p>
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

export default SignUp;