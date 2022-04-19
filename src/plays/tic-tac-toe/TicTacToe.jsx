import { useLocation } from "react-router-dom";
import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";

// importing Game component
import Game from "./Game";
import "./TicTacToe.css";

function TicTacToe() {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <h1>Tic-Tac-Toe</h1>
          <Game />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
