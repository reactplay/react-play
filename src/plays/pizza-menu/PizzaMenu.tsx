import React from 'react';

import PlayHeader from 'common/playlists/PlayHeader';
import App from './App';
import './styles.css';

function PizzaMenu(props: any) {
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

export default PizzaMenu;
