import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './countriesStatistic.css';

import { GeoContext } from './Context';

const SearchAndFilter = () => {
  const {
    showSuggestions,
    index,
    selected,
    SearchResult,
    searchSuggestionRef,
    searchResultItemRef,
    keyPressHandler,
    handleOnchange,
    handleOnFocus,
    handleOnBlur,
    searchResultClickHandler,
    searchbarClickHandler,
    searchInputClickHandler
  } = useContext(GeoContext);

  return (
    <div className="w-full max-w-[550px] mx-auto flex justify-center">
      <div className="relative w-full h-fit" tabIndex="0" onBlur={(e) => handleOnBlur(e)}>
        <input
          autoComplete="new-password"
          className="geo-now-searchbar w-full rounded-lg bg-inherit my-4"
          placeholder="Enter the country..."
          tabIndex="0"
          type="text"
          value={selected}
          onChange={(e) => handleOnchange(e)}
          onClick={searchInputClickHandler}
          onFocus={handleOnFocus}
          onKeyDown={keyPressHandler}
        />
        <div
          className="absolute top-[50%] translate-y-[-50%] right-0  w-[30px] h-[30px] mx-2 bg-cyan-500 cursor-pointer"
          tabIndex="0"
          onClick={searchbarClickHandler}
          onKeyDown={keyPressHandler}
        >
          <BsSearch className="absolute top-1 left-1  text-2xl text-white " />
        </div>
        {showSuggestions && (
          <div
            className="absolute w-full max-h-[290px] bg-white  p-4 overflow-y-auto outline-none"
            ref={searchSuggestionRef}
            tabIndex="-1"
            onKeyDown={(e) => keyPressHandler(e)}
          >
            {SearchResult.map((country, i) => {
              return (
                <div
                  className={`border-b cursor-pointer hover:bg-cyan-100 font-bold px-2 my-[0.9rem] ${
                    index === i ? 'geo-search-selected' : ''
                  }`}
                  key={i}
                  ref={index === i ? searchResultItemRef : null}
                  onClick={() => searchResultClickHandler(i)}
                >
                  {country.properties.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
