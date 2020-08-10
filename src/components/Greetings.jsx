import React from 'react';

const Greetings = ({ lang, children }) => {
  let msg;

  switch (lang) {
    case 'de':
      msg = 'Hallo';
      break;
    case 'en':
      msg = 'Hello';
      break;
    case 'es':
      msg = 'Hola';
      break;
    default:
      msg = 'Bonjour';
  }

  return (
    <p className="border">
      {' '}
      {msg} {children}{' '}
    </p>
  );
};

export default Greetings;
