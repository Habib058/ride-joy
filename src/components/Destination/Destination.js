import React from 'react';
import Header from '../Header/Header';
import css from './Destination.css'

const Destination = () => {
    const handleBlur = () => {

    }
    return (
        <div className="container">
            <Header />
            <br />
            <div className="content">
                <div className="searchContent">
                    <form action="">
                        <label htmlFor="from">Pick-Up From</label>
                        <br />
                        <input type="text" name="from" onBlur={handleBlur} placeholder="Place From Pick" />
                        <br />
                        <label htmlFor="to">Pick-To</label>
                        <br />
                        <input type="text" name="to" onBlur={handleBlur} placeholder="Place To Go" />
                        <br />
                        <input className="btn btn-success" type="submit" value="Submit" />
                    </form>

                </div>
                <div className="mapContent">

                </div>

            </div>
        </div>
    );
};

export default Destination;