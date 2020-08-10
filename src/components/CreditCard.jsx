import React from 'react';
import './CreditCard.css';
const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let typePath;
  type === 'Visa'
    ? (typePath = './img/visa.png')
    : (typePath = './img/master-card.svg');

  const cardStyle = {
    color: `${color}`,
    backgroundColor: `${bgColor}`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="flex-end">
        <img className="card-logo" src={typePath} alt="card brand" />
      </div>
      <div className="number">
        {' '}
        <span>**** **** **** {number.slice(12, 16)}</span>
      </div>
      <div className="expiration-date">
        <span className="card-date">
          Expires {expirationMonth}/{expirationYear}{' '}
          <span className="card-name">{bank}</span>
        </span>
        <p className="card-owner"> {owner} </p>
      </div>
    </div>
  );
};

export default CreditCard;
