import PlayHeader from 'common/playlists/PlayHeader';
import DrawingPanel from './components/drawing-panel/DrawingPanel';
import './styles.css';

// WARNING: Do not change the entry componenet name
function Pixy(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <DrawingPanel />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Pixy;
