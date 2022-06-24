import PlayHeader from 'common/playlists/PlayHeader';

import React from "react";

import Game from "./components/Game.jsx"

import "./styles/tic-tac-toe-tj.css";

function TicTacToeGame(props) {
  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
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