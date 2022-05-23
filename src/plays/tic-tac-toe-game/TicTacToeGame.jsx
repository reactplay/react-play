import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

import React from "react";

import Game from "./components/Game.jsx"

import "./styles/tic-tac-toe-tj.css";

function TicTacToeGame(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body tic-tac-toe-tj">
        {/* Your Code Starts Here */}
           <Game />
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TicTacToeGame;