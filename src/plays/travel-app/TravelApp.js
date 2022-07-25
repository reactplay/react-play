import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Display from './components/Display';

// WARNING: Do not change the entry componenet name
function TravelApp(props) {

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
          <>
             <Display />
          </>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TravelApp;