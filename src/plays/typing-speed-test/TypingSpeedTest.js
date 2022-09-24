import PlayHeader from "common/playlists/PlayHeader";
import Main from "./components/Main";

function TypingSpeedTest(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details ">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Main />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TypingSpeedTest;
