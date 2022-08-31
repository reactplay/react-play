import React from "react";
import "./search.css";
const search = (props) => {
  const { setname, Pokemon } = props;
  return (
    <div className="poke-main-cont">
      <div className="poke-input-cont field">
        <input
          type="input"
          className="poke-input-field"
          placeholder=" "
          name="name"
          id="name"
          required
          onChange={(e) => setname(e.target.value)}
        />
        <label for="name" class="poke-form-label">
          Pokemon name
        </label>
      </div>
      <button className="poke-stats-sumbit-btn" onClick={Pokemon} >Search</button>
    </div>
  );
};

export default search;
