import React from 'react'

export default function Slider({ min, max, value, handleChange}) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}