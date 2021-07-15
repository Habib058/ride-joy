import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <h4>RIDE-JOY</h4>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/signUp"><button className="btn btn-success">Login</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;