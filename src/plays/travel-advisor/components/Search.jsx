import React from 'react';
import '../styles/search.css';
import { FcSearch } from 'react-icons/fc';

const Search = ({ inputval, setinputval, setsumbit }) => {
  const onSumbit = (e) => {
    e.preventDefault();
    setsumbit(true);
  };
  return (
    <div className="travel-advisor-form__group">
      <form action="" onSubmit={onSumbit} className='travel-advisor-form'>
        <input
          className="travel-advisor-form__input"
          id="name"
          placeholder="Enter City name"
          required=""
          type="text"
          value={inputval}
          onChange={(e) => setinputval(e.target.value)}
        />
        <button type="submit" className="travel-advisor-btn">
          <FcSearch size={27}/>
        </button>
      </form>
    </div>
  );
};

export default Search;
