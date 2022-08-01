import PlayHeader from "common/playlists/PlayHeader";
import Map from "./Map";
import SearchAndFilter from "./SearchAndFilter";
import CountriesGrid from "./CountriesGrid";
import "./countriesStatics.css";

function CountriesStatics(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <h1 className="text-4xl mt-4 font-bold text-center capitalize">
            Search on map
          </h1>
          <h2 className="text-xl text-center">
            Click the country on the map to pull the country specific
            statistics.
          </h2>
          <SearchAndFilter />
          <Map />
          <CountriesGrid />

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CountriesStatics;
