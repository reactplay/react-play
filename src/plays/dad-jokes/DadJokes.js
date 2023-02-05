import PlayHeader from 'common/playlists/PlayHeader';
import JokeList from './components/jokeList/jokeList';
import './styles.css';

// WARNING: Do not change the entry componenet name
function DadJokes(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="dad-jokes">
            <JokeList />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DadJokes;
