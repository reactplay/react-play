import * as React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import Wizard from './wizard';
import data from './data.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              <Wizard data={data} title="Why Typescript" />
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default WhyTypescript;
