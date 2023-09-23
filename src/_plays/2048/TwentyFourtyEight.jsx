import PlayHeader from 'common/playlists/PlayHeader';
import GameTwentyFourtyEight from './GameTwentyFourtyEight';

function TwentyFourtyEight(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details game-bg">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <GameTwentyFourtyEight />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TwentyFourtyEight;
