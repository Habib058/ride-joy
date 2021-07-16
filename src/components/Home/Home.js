import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from './Home.css'
import train from '../../images/Group.png';
import bus from '../../images/Frame-1.png';
import car from '../../images/Frame-2.png';
import bike from '../../images/Frame.png';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div className="container" >
            <div className="background">
            <Header />
            <br />
            <div className="rideContextArea">
                <Link to="/destination" className="individualContext">
                    <img src={bike} alt="" />
                    <br />
                    <h3>BIKE</h3>
                </Link>
                <Link to="/destination" className="individualContext">
                    <img src={car} alt="" />
                    <br />
                    <h3>CAR</h3>
                </Link>
                <Link to="/destination" className="individualContext">
                    <img src={bus} alt="" />
                    <br />
                    <h3>BUS</h3>
                </Link>
                <Link to ="/destination" className="individualContext">
                    <img src={train} alt="" />
                    <br />
                    <h3>TRAIN</h3>
                </Link>
            </div>

            </div>
            

        </div>
    );
};

export default Home; { }