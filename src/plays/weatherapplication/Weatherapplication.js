import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { HomePage } from './pages/HomePage';

// WARNING: Do not change the entry componenet name
function Weatherapplication(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className=" h-screen bg-black text-white">
            <HomePage />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Weatherapplication;
