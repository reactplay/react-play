import PlayHeader from 'common/playlists/PlayHeader';
import Users from './components/Users';

// WARNING: Do not change the entry componenet name
function RollTheDice(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Users />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RollTheDice;
