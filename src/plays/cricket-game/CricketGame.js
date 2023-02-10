import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

// WARNING: Do not change the entry componenet name
function CricketGame(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div>
            <h1>Play Details - Cricket Game</h1>
            <p>Hello world!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CricketGame;
