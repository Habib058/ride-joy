import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/Bg.png';
import css from './Home.css'

const Home = () => {
    return (
        <div className="container" >
            <div className="background">
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
                        <button className="btn btn-success">Login</button>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default Home;{}