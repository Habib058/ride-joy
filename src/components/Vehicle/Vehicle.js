import React from 'react';
import { useHistory } from 'react-router-dom';
import css from './Vehicle.css'

const Vehicle = (props) => {
    const vehicle = props.vehicle;
    const { type, img, capacity, id, price } = vehicle;
    const history = useHistory();
    const vehicleDetails = ()=>{
        const url =`/destination/${id}`;
        history.push(url);
    }
    //console.log(id);
    return (
        <section onClick={()=>vehicleDetails(id)}>
            <div className="individualContext">
                <img src={img} alt="" />
                <br />
                <h3>{type}</h3>
            </div>
        </section>
    );
};

export default Vehicle;