import React from 'react';

import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import App from './App';

function BioCard(props: any) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <App />
        </div>
      </div>
    </>
  );
}

export default BioCard;
