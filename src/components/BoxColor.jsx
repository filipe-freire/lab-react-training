import React from 'react';

const BoxColor = ({ r, g, b }) => {
  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  const hex = rgbToHex(r, g, b);

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p> {hex} </p>
    </div>
  );
};

export default BoxColor;
