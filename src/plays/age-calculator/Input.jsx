import React from 'react';

function Input({ onClick, onChange }) {
  return (
    <div className="inputs-wrapper">
      <input id="date-input" name="age" type="date" onChange={onChange} />

      <button id="btn" type="button" onClick={onClick}>
        Calculate
      </button>
    </div>
  );
}

export default Input;
