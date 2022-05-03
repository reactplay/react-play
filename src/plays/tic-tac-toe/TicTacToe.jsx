import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";

// importing Game component
import Game from "./Game";
import "./TicTacToe.css";

function TicTacToe(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <Game />
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
