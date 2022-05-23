import * as React from 'react';
import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';
import CalendarGrid from './CalendarGrid'
import { ContextProvider } from './Context';

import './Calendar.scss'
import ModalContainer from './ModalContainer';

function Calendar(props:any) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body calendar-play">
          <ContextProvider>
            <ModalContainer />
            <CalendarGrid />
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default Calendar;