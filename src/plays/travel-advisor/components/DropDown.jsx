import React from 'react';
import '../styles/dropdown.css';
const DropDown = ({ setype, type }) => {
  return (
    <div className="travel-advisor-select-cont">
      <select
        className="travel-advisor-select"
        value={type}
        onChange={(e) => setype(e.target.value)}
      >
        <option value="restaurants">Restaurants</option>
        <option value="hotels">Hotels</option>
      </select>
    </div>
  );
};

export default DropDown;
