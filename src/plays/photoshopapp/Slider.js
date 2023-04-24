import React from 'react';

export default function Slider({ min, max, value, handleChange }) {
  return (
    <div className="photoshopApp-slider-container">
      <input
        className="photoshopApp-slider"
        max={max}
        min={min}
        type="range"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
