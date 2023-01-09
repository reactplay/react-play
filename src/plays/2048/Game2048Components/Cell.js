import React from 'react';

function Cell(props) {
  return (
    <div className={`cell cell--${props.label}`}>
      <span className="cell__label">{props.label}</span>
    </div>
  );
}

export default Cell;
