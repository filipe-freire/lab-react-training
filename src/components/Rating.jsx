import React from 'react';

const Rating = ({ children }) => {
  const stars = Math.round(parseFloat(children));
  // let rating = '';
  // for (let i = 0; i < 5; i++) {
  //   if (i < stars) {
  //     rating += '★';
  //   } else {
  //     rating += '☆';
  //   }
  // }
  // return <div>{rating}</div>;
  return <div> {'★'.repeat(stars) + '☆'.repeat(5 - stars)} </div>;
};

export default Rating;
