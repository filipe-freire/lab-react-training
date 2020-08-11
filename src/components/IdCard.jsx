import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="border">
      <div style={{ maxWidth: '400px' }}>
        <img src={picture} alt="User profile" />
      </div>
      <div className="flex-col">
        <p>
          <span>First name</span>: {firstName}
        </p>
        <p>
          <span>Last name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Height:</span> {height / 100}m
        </p>
        <p>
          <span>Birth:</span> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
