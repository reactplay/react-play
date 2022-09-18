import PlayHeader from "common/playlists/PlayHeader";
import "./styles.css";

function TypingSpeedTest(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1 className="text-red-500">Play Details - Typing Speed Test</h1>
            <p>This is going to be typing test application</p>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TypingSpeedTest;
