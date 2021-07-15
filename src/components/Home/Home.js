import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from './Home.css'
import train from '../../images/Group.png';
import bus from '../../images/Frame-1.png';
import car from '../../images/Frame-2.png';
import bike from '../../images/Frame.png';


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
                <br />
                <div className="rideContextArea">
                    <Link to="" className="individualContext">
                        <img src={bike} alt="" />
                        <br />
                        <h3>BIKE</h3>
                    </Link>
                    <Link className="individualContext">
                        <img src={car} alt="" />
                        <br />
                        <h3>CAR</h3>
                    </Link>
                    <Link className="individualContext">
                        <img src={bus} alt="" />
                        <br />
                        <h3>BUS</h3>
                    </Link>
                    <Link className="individualContext">
                        <img src={train} alt="" />
                        <br />
                        <h3>TRAIN</h3>
                    </Link>
                </div>

            </div>

        </div >
    );
};

export default Home; { }