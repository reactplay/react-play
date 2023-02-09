import PlayHeader from 'common/playlists/PlayHeader';
import React from 'react';
import Calculator from './components/Calculator';

// WARNING: Do not change the entry componenet name
function SimpleCalculator(props) {
  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="suri-calci">
            <Calculator />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SimpleCalculator;
