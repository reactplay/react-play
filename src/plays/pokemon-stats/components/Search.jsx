import React from "react";
import "./search.css";
const search = (props) => {
  const { setname, fetchPokemonDetails } = props;
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
        <label htmlFor="name" className="poke-form-label">
          Pokemon name
        </label>
      </div>
      <button className="poke-stats-sumbit-btn" onClick={fetchPokemonDetails} >Search</button>
    </div>
  );
};

export default search;
