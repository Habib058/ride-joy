import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import css from './Home.css'
import train from '../../images/Group.png';
import bus from '../../images/Frame-1.png';
import car from '../../images/Frame-2.png';
import bike from '../../images/Frame.png';
import Header from '../Header/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import Vehicle from '../Vehicle/Vehicle';
import vehicles from '../../fakeData/data';


const Home = () => {
    
    return (

        <div className="container" >
            <div className="background">
                <Header />
                <br />
                <div className="rideContextArea">
                    {
                        vehicles.map(vehicle =>
                                <Vehicle
                                    key={vehicle.id}
                                    vehicle={vehicle}>
                                </Vehicle>
                            )
                    }
                </div>

            </div>


        </div>
    );
};

export default Home;