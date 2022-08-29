import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import "./countriesStatistic.css";

import { GeoContext } from "./Context";

const SearchAndFilter = () => {
  const {
    showSuggestions,
    index,
    selected,
    SearchResult,
    searchSuggestionRef,
    keyPressHandler,
    handleOnchange,
    handleOnFocus,
    searchResultClickHandler,
  } = useContext(GeoContext);
  return (
    <div className="w-full max-w-[550px] mx-auto flex justify-center">
      <div className="relative w-full">
        <input
          type="text"
          className="geo-now-searchbar w-full rounded-lg bg-inherit"
          placeholder="Enter the country..."
          value={selected}
          onChange={(e) => handleOnchange(e)}
          onFocus={handleOnFocus}
          onKeyDown={keyPressHandler}
          autocomplete="new-password"
        />
        <div className="absolute top-[50%] translate-y-[-50%] right-0  w-[30px] h-[30px] mx-2 bg-cyan-500 cursor-pointer">
          <BsSearch className="absolute top-1 left-1 text-2xl text-white" />
        </div>
        {showSuggestions && (
          <div
            className="absolute w-full bg-white  p-4 "
            onKeyDown={keyPressHandler}
            ref={searchSuggestionRef}
          >
            {SearchResult.map((country, i) => {
              return (
                <div
                  key={i}
                  onClick={() => searchResultClickHandler(i)}
                  className={`border-b cursor-pointer hover:bg-cyan-100 font-bold  ${
                    index === i ? "geo-search-selected" : ""
                  }`}
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
