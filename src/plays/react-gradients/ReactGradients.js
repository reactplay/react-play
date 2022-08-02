import PlayHeader from "common/playlists/PlayHeader";
import GradientComponent from "./GradientComponent";
import "./styles.css";

// WARNING: Do not change the entry componenet name
function ReactGradients(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <GradientComponent />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ReactGradients;
