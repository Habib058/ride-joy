import React from 'react';
import Header from '../Header/Header';
import css from './Destination.css';
import map from '../../images/Map.png';
import { useParams } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import AvailableVehicle from '../AvailableVehicle/AvailableVehicle';
import vehicles from '../../fakeData/data';


const Destination = (props) => {
    const mapStyles = {
        width: '800px', height: '600px',
    };

    const [location, setLocation] = useState({});
    const [isSearch, setIsSearch] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearch(!isSearch);
    }
    const{id} = useParams();

    const handleBlur = (e) => {
        const newLocation = { ...location };
        newLocation[e.target.name] = e.target.value;
        setLocation(newLocation);
    }
    return (
        <div className='container'>
            <Header />
            <section className='search-container'>
                <div className='searchLocation'>
                    {
                        !isSearch ? (
                            <form onSubmit={handleSearch}>
                                <div className="form__group field">
                                    <label className="form__label">Pick From</label>
                                    <br />
                                    <input type="text" name="from" placeholder="From" className="form__field" onBlur={handleBlur} required />
                                    <br />
                                    <label className="form__label">Pick To</label>
                                    <br />
                                    <input className="form__field" type="text" placeholder="To" name="to" onBlur={handleBlur} required />
                                    <br />
                                    <button type='submit' className="search-btn">Search</button>
                                </div>
                            </form>

                        )
                            :
                            (<div className='searchLocationResult'>
                                {/* location */}
                                <div className='location'>
                                    <h4>From: {location.from}</h4>
                                    <h4>To: {location.to}</h4>
                                </div>
                                {/* vehicles */}
                                <div className='ticketInfo'>
                                    {
                                        vehicles.map(vehicle => {
                                            if (vehicle.id === id) {
                                                return(
                                                    <div className='vehicle-card'>
                                                        <img src={vehicle.img} alt='' key={id} />
                                                        <h5>{vehicle.type}</h5><br />
                                                        <h5><span><FontAwesomeIcon icon={faUsers} /></span> {vehicle.capacity}</h5>
                                                        <p>{vehicle.price}</p>
                                                    </div>
                                                ) 
                                            }
                                        })
                                    }
                                    {
                                        vehicles.map(vehicle => {
                                            if (vehicle.id === id) {
                                                return(
                                                    <div className='vehicle-card'>
                                                        <img src={vehicle.img} alt='' key={id} />
                                                        <h5>{vehicle.type}</h5><br />
                                                        <h5><span><FontAwesomeIcon icon={faUsers} /></span> {vehicle.capacity}</h5>
                                                        <p>{vehicle.price}</p>
                                                    </div>
                                                ) 
                                            }
                                        })
                                    }
                                    {
                                        vehicles.map(vehicle => {
                                            if (vehicle.id === id) {
                                                return(
                                                    <div className='vehicle-card'>
                                                        <img src={vehicle.img} alt='' key={id} />
                                                        <h5>{vehicle.type}</h5><br />
                                                        <h5><span><FontAwesomeIcon icon={faUsers} /></span> {vehicle.capacity}</h5><br />
                                                        <p>{vehicle.price}</p>
                                                    </div>
                                                ) 
                                            }
                                        })
                                    }
                                </div>
                                <button className='cancel-btn' onClick={() => setIsSearch(!isSearch)}>Cancel</button>
                            </div>
                            )
                    }


                </div>
                <div className='map'>
                    <Map
                        google={props.google}
                        zoom={10}
                        style={mapStyles}

                    >
                    </Map>
                </div>
            </section>

        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAFOWtYQMIp5lIk2uosBLY6_VCeOHoXkXA'
})(Destination);