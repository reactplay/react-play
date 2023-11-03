import PlayHeader from 'common/playlists/PlayHeader';
import Typingtest from './components/Typing_test';

// WARNING: Do not change the entry componenet name
function Typingtestgame(props) {
  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Typingtest />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Typingtestgame;
