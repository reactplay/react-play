import React from 'react';
import './search.css';

const Search = ({ inputval, setinputval }) => {
  return (
    <div class="form__group">
      <input
        type="text"
        class="form__input"
        id="name"
        placeholder="Full name"
        required=""
        value={inputval}
        onChange={(e) => setinputval(e.target.value)}
      />
      <label for="name" class="form__label">
        Full Name
      </label>
    </div>
  );
};

export default Search;
