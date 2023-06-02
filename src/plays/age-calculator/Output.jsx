import React from 'react';

function Output({ year, month, day }) {
  return (
    <div className="outputs-wrapper">
      <div>
        <span id="years">{year}</span>
        <p>Year</p>
      </div>
      <div>
        <span id="months">{month}</span>
        <p>Months</p>
      </div>
      <div>
        <span id="days">{day}</span>
        <p>Days</p>
      </div>
    </div>
  );
}

export default Output;
