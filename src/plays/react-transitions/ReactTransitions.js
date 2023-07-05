import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

import PrioritySearch from './PrioitySearch';
import TrainsitionSearch from './TransitionSearch';

import { users } from 'common/utils/fakeUser';

// WARNING: Do not change the entry componenet name
function ReactTransitions(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="react-transition play-details-body">
          {/*<PrioritySearch users={users} />*/}
          <TrainsitionSearch users={users} />
        </div>
      </div>
    </>
  );
}

export default ReactTransitions;
