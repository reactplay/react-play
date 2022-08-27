import PlayHeader from "common/playlists/PlayHeader";
import Map from "./Map";
import Country from "./Country";
import { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import { GeoContext } from "./Context";
import MapData from "./featues.json";
function CountriesStatics(props) {
  // Your Code Start below.
  const [activeGeo, setActiveGeo] = useState("ind");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [searchQuery, setSearchQuery] = useState("India");
  //search query return the first 10 matching results.
  const SearchResult = MapData.objects.world.geometries
    .filter((o) =>
      o.properties.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 10);

  const keyPressHandler = (e) => {
    const length = SearchResult.length;
    //downArrow Key
    if (e.keyCode === 40) {
      setIndex(index + 1);
      if (index >= length - 1) {
        setIndex(0);
      }
    }
    //upArrow Key
    if (e.keyCode === 38) {
      setIndex(index - 1);
      if (index <= 0) {
        setIndex(length - 1);
      }
    }
    //esc key
    if (e.keyCode === 27) {
      setShowSuggestions(false);
      e.currentTarget.blur();
    }
    //Enter key
    if (e.keyCode === 13) {
      if (searchQuery !== null) {
        setShowSuggestions(false);
      }
    }
  };
  useEffect(() => {
    setSelected(SearchResult[index].properties.name);
  }, [index]);

  const handleOnchange = (e) => {
    setShowSuggestions(true);
    setSearchQuery(e.target.value);
    setSelected(e.target.value);
  };
  const handleOnFocus = () => {
    setShowSuggestions(true);
  };
  const handleOnBlur = () => {
    setShowSuggestions(false);
  };
  const searchResultClickHandler = (i) => {
    setIndex(i);
    setShowSuggestions(false);
  };
  const handleClickMap = (geo) => {
    setActiveGeo(geo.id.toLowerCase());
  };
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <h1 className="text-4xl mt-4 font-bold text-center capitalize">
            Geo Now
          </h1>
          <h2 className="text-xl text-center capitalize">
            Learn geography in fun and interactive way
          </h2>
          <GeoContext.Provider
            value={{
              showSuggestions,
              index,
              selected,
              searchQuery,
              SearchResult,
              keyPressHandler,
              handleOnchange,
              handleOnFocus,
              handleOnBlur,
              searchResultClickHandler,
            }}
          >
            <SearchAndFilter />
            <div className="flex flex-col xl:flex-row justify-between">
              <Map activeGeo={activeGeo} handleClickMap={handleClickMap} />
              <Country activeGeo={activeGeo} />
            </div>
          </GeoContext.Provider>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CountriesStatics;
