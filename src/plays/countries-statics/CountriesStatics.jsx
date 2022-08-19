import PlayHeader from "common/playlists/PlayHeader";
import Map from "./Map";
import Country from "./Country";
import { useState } from "react";

function CountriesStatics(props) {
  // Your Code Start below.
  const [activeGeo, setActiveGeo] = useState("ind");
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
          <div className="flex flex-col xl:flex-row justify-between">
            <Map activeGeo={activeGeo} handleClickMap={handleClickMap} />
            <Country activeGeo={activeGeo} />
          </div>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CountriesStatics;
