import './styles.css';
import PlayHeader from 'common/playlists/PlayHeader';
import GameTable from './GameTable';

// WARNING: Do not change the entry componenet name
function SchulteTables(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <GameTable />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SchulteTables;
