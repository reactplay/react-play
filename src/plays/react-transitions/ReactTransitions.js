import { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

import PrioritySearch from './PrioitySearch';
import TrainsitionSearch from './TransitionSearch';

import { users } from 'common/utils/fakeUser';

function ReactTransitions(props) {
  const [transitionOn, setTransitionOn] = useState(false);
  const onValueChange = (event) => {
    const val = event.target.value;
    if (val === 'transition') {
      setTransitionOn(true);
    } else {
      setTransitionOn(false);
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="react-transition play-details-body">
          <div className="modes">
            <input
              checked={transitionOn === false}
              id="priority-id"
              name="type"
              type="radio"
              value="priority"
              onChange={onValueChange}
            />
            <label htmlFor="priority-id">Priority</label>
            <input
              checked={transitionOn === true}
              id="transition-id"
              name="type"
              type="radio"
              value="transition"
              onChange={onValueChange}
            />
            <label htmlFor="priority-id">Transition</label>
          </div>
          {transitionOn ? <TrainsitionSearch users={users} /> : <PrioritySearch users={users} />}
        </div>
      </div>
    </>
  );
}

export default ReactTransitions;
