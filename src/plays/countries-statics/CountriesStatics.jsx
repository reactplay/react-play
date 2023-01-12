import PlayHeader from 'common/playlists/PlayHeader';
import Map from './Map';
import Country from './Country';
import { useEffect, useRef, useState } from 'react';
import SearchAndFilter from './SearchAndFilter';
import { GeoContext } from './Context';
import MapData from './featues.json';

function CountriesStatics(props) {
  // Your Code Start below.
  const [activeGeo, setActiveGeo] = useState('ind');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState('india');
  const searchSuggestionRef = useRef(null);
  const searchResultItemRef = useRef();

  // search query return the first 10 matching results.
  const SearchResult = MapData.objects.world.geometries.filter((o) =>
    o.properties.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );
  SearchResult.sort((a, b) => a.properties.name.localeCompare(b.properties.name));

  const keyPressHandler = (e) => {
    const length = SearchResult.length;
    // downArrow Key

    if (e.keyCode === 40) {
      if (index < length - 1) {
        searchSuggestionRef.current.focus();
        if (e.target.value === '') {
          setIndex(0);
          searchSuggestionRef.current.scrollTo(0, 0);
        } else {
          setIndex(index + 1);
        }
      } else {
        setIndex(0);
      }
    }
    // upArrow Key
    if (e.keyCode === 38) {
      if (index > 0) {
        searchSuggestionRef.current.focus();
        if (e.target.value === '') {
          setIndex(0);
          searchSuggestionRef.current.scrollTo(0, 0);
        } else setIndex(index - 1);
      }
    }
    // esc key
    if (e.keyCode === 27) {
      setShowSuggestions(false);
      e.currentTarget.blur();
    }
    // Enter key
    if (e.keyCode === 13) {
      MapData.objects.world.geometries.map((country) => {
        if (country.properties.name.toLowerCase() === selected.toLowerCase()) {
          setActiveGeo(country.id);
          setShowSuggestions(false);
        }
      });
      setSelected(SearchResult[index].properties.name);
      setActiveGeo(SearchResult[index].id);
    }
  };

  useEffect(() => {
    setSelected(SearchResult[index].properties.name);
    searchResultItemRef.current &&
      searchResultItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
  }, [index, showSuggestions]);

  const searchInputClickHandler = () => {
    setShowSuggestions(true);
  };
  const handleOnchange = (e) => {
    setShowSuggestions(true);
    setSearchQuery(e.target.value);
    setSelected(e.target.value);
  };
  const handleOnFocus = () => {
    setShowSuggestions(true);
  };
  const handleOnBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowSuggestions(false);
    }
  };
  const searchResultClickHandler = (i) => {
    setIndex(i);
    setSelected(SearchResult[i].properties.name);
    setShowSuggestions(false);
    setActiveGeo(SearchResult[i].id);
  };
  const searchbarClickHandler = () => {
    MapData.objects.world.geometries.map((country) => {
      if (country.properties.name.toLowerCase() === selected.toLowerCase()) {
        setActiveGeo(country.id);
        setShowSuggestions(false);
      }
    });
  };

  const handleClickMap = (geo) => {
    setSelected(geo.properties.name);
    setActiveGeo(geo.id.toLowerCase());
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <h1 className="text-4xl mt-4 font-bold text-center capitalize">Geography Now</h1>
          <h2 className="text-xl text-center capitalize">
            Learn geography in fun and interactive way
          </h2>
          <GeoContext.Provider
            value={{
              activeGeo,
              showSuggestions,
              index,
              selected,
              searchQuery,
              SearchResult,
              searchSuggestionRef,
              searchResultItemRef,
              handleOnBlur,
              keyPressHandler,
              handleOnchange,
              handleOnFocus,
              searchResultClickHandler,
              handleClickMap,
              searchbarClickHandler,
              searchInputClickHandler
            }}
          >
            <SearchAndFilter />
            <div className="flex flex-col xl:flex-row justify-between">
              <Map />
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
