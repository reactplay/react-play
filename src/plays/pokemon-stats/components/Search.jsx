import React from "react";
import "./search.css";
// import pokeball from '../images/pokeball.png';
const search = (props) => {
  const { setname, Pokemon } = props;
  return (
    <div className="main">
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
          onChange={(e) => setname(e.target.value)}
        />
        <label for="name" class="form__label">
          Name
        </label>
      </div>
      <button className="button-30" onClick={Pokemon} >Search</button>
    </div>
  );
};

export default search;
