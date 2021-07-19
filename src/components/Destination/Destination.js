import React from 'react';
import Header from '../Header/Header';
import css from './Destination.css';
import map from '../../images/Map.png'
import { useParams } from 'react-router-dom';

const Destination = (props) => {
    const {id} = useParams();
    console.log(id);
    const handleBlur = () => {

    }
    return (
        <div className="container">
            <Header />
            <br />
            <div className="content">
                <div className="searchContent">

                    <label htmlFor="from">Pick-Up From</label>
                    <br />
                    <input type="text" name="from" onBlur={handleBlur} placeholder="Place From Pick" />
                    <br />
                    <label htmlFor="to">Pick-To</label>
                    <br />
                    <input type="text" name="to" onBlur={handleBlur} placeholder="Place To Go" />
                    <br />
                    <label htmlFor="to">Date</label><br />
                    <input type="date" name="" id="" /><br />
                    <button className="btn btn-success">Submit</button>

                </div>
                <div className="mapContent">
                    <img style={{ width: '900px', height: '700px' }} src={map} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Destination;