import PlayHeader from "common/playlists/PlayHeader";
import { BsSearch } from "react-icons/bs";
import "./countriesStatics.css";

function CountriesStatics(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="w-full max-w-5xl mx-auto my-4 ">
            <div className="relative max-w-xl mx-auto ">
              <input
                type="text"
                placeholder="Search...."
                className="w-full rounded-md border-0 outline-0"
              />
              <button className="absolute top-1 right-1 bg-stone-300 w-10 h-8">
                <BsSearch className="text-xl mx-auto" />
              </button>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CountriesStatics;
