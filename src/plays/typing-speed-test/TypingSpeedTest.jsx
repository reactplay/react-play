import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import TypingTest from './components/TypingTest';
import { TypingTestProvider } from './context/TypingTestContext';

function TypingSpeedTest(props) {
  return (
    <TypingTestProvider>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <TypingTest />
        </div>
      </div>
    </TypingTestProvider>
  );
}

export default TypingSpeedTest;
