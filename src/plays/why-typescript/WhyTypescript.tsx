import * as React from "react";
import PlayHeader from "common/playlists/PlayHeader";
import Wizard from "./wizard";
import data from "./data.json";

function WhyTypescript(props: any) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body why-typescript">
          {/* Your Code Starts Here */}
          <div>
            <h1>Play Details - Why Typescript</h1>
            <div>
              <Wizard title="Why Typescript" data={data} />
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default WhyTypescript;
