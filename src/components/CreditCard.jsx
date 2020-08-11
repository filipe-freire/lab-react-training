import React from 'react';
import './CreditCard.css';

const censoredCreditCardNumber = (number) => {
  return `**** **** **** ${number.substring(12, 16)}`;
};

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
        <span>{censoredCreditCardNumber(number)}</span>
      </div>
      <div className="expiration-date">
        <span className="card-date">
          Expires{' '}
          {expirationMonth < 10 ? '0' + expirationMonth : expirationMonth}/
          {expirationYear % 1000} <span className="card-name">{bank}</span>
        </span>
        <p className="card-owner"> {owner} </p>
      </div>
    </div>
  );
};

export default CreditCard;
