import './styles.css';
import PlayHeader from 'common/playlists/PlayHeader';
import GameTable from './GameTable';

function SchulteTables(props) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <GameTable />
        </div>
      </div>
    </>
  );
}

export default SchulteTables;
