import React from 'react';

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
  const msg = `Random value between ${min} and ${max} => ${randomNumber}`;
  return <p className="border">{msg}</p>;
};

export default Random;
