import React from 'react';
import './search.css';

const Search = ({ inputval, setinputval }) => {
  return (
    <div class="form__group">
      <input
        type="text"
        class="form__input"
        id="name"
        placeholder="Enter City name"
        required=""
        value={inputval}
        onChange={(e) => setinputval(e.target.value)}
      />
    </div>
  );
};

export default Search;
