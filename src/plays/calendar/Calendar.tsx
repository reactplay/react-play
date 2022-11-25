import * as React from 'react';

import PlayHeader from 'common/playlists/PlayHeader';
import CalendarGrid from './CalendarGrid'
import { ContextProvider } from './Context';

import './Calendar.scss'
import ModalContainer from './ModalContainer';

function Calendar(props:any) {

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
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