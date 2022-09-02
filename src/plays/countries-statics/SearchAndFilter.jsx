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
    keyPressHandler,
    handleOnchange,
    handleOnFocus,
    handleOnBlur,
    searchResultClickHandler,
    searchbarClickHandler,
    searchInputClickHandler,
  } = useContext(GeoContext);
  return (
    <div className="w-full max-w-[550px] mx-auto flex justify-center">
      <div
        className="relative w-full h-fit"
        tabIndex="1"
        onBlur={(e) => handleOnBlur(e)}
      >
        <input
          type="text"
          className="geo-now-searchbar w-full rounded-lg bg-inherit my-4"
          placeholder="Enter the country..."
          value={selected}
          onChange={(e) => handleOnchange(e)}
          onFocus={handleOnFocus}
          onKeyDown={keyPressHandler}
          autoComplete="new-password"
          onClick={searchInputClickHandler}
        />
        <div
          className="absolute top-[50%] translate-y-[-50%] right-0  w-[30px] h-[30px] mx-2 bg-cyan-500 cursor-pointer"
          onClick={searchbarClickHandler}
        >
          <BsSearch className="absolute top-1 left-1  text-2xl text-white " />
        </div>
        {showSuggestions && (
          <div
            className="absolute w-full max-h-[290px] bg-white  p-4 overflow-y-auto"
            onKeyDown={keyPressHandler}
          >
            {SearchResult.map((country, i) => {
              return (
                <div
                  key={i}
                  onClick={() => searchResultClickHandler(i)}
                  className={`border-b cursor-pointer hover:bg-cyan-100 font-bold px-2 ${
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
