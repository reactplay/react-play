import PlayHeader from "common/playlists/PlayHeader";
import TypingTest from "./components/TypingTest";

function TypingSpeedTest(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">

        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <TypingTest />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TypingSpeedTest;
