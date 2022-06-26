import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./drawIt.css";
import Canvas from "./Canvas";

function DrawIt(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={play} />
        <div className='play-details-body'>
          {/* Your Code Starts Here */}

          <div className='' style={{}}>
            <p style={{ textAlign: "center", fontSize: "18px" }}>Draw It</p>
            <p style={{ textAlign: "center" }}>
              Draw on the blackboard using your mouse and bring the creativity
              here
            </p>
            <Canvas />
          </div>
          <div>
            <h1>Play Details - DrawIt</h1>
            <p>
              DrawIt is an react application which is like a paint tool. You can
              draw in the canvas and be an HTML artist😉
            </p>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DrawIt;
