import PlayHeader from 'common/playlists/PlayHeader';
import Background from './bg.png';
import './styles.css';

// WARNING: Do not change the entry componenet name
function TwoPlaysAMonth(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <img src={Background} alt="2playsamonth" />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TwoPlaysAMonth;
