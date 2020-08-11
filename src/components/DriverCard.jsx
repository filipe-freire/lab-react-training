import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <img src={props.img} alt={props.name} />
      <div>
        <h3> {props.name} </h3>
        <Rating> {props.rating} </Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
