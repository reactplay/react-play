import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import App from './App';

// WARNING: Do not change the entry componenet name
function AirbnbExperiencesClone(props) {
  // Your Code Start below.

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        <App />
      </div>
    </div>
  );
}

export default AirbnbExperiencesClone;
