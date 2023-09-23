import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Main from './Components/Main';

// WARNING: Do not change the entry componenet name
function TenziesGame(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
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

export default TenziesGame;
