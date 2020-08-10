import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="border">
      <div style={{ maxWidth: '400px' }}>
        <img src={picture} alt="" />
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
          <span>Height:</span> {height}
        </p>
        <p>
          <span>Birth:</span> {birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
