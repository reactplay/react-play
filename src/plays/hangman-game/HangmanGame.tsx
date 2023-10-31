import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import Main from './components/Main';
import './styles.css';

function HangmanGame(props: any) {
  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Main />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default HangmanGame;
