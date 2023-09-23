import PlayHeader from 'common/playlists/PlayHeader';
import Gallery from './Gallery';
import './styles.css';

// WARNING: Do not change the entry componenet name
function Imagegallery(props) {
  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <Gallery />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Imagegallery;
