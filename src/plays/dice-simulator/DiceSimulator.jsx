import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import DiceContainer from './DiceContainer';

function DiceSimulator(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <DiceContainer />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DiceSimulator;
