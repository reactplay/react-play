
import PlayHeader from 'common/playlists/PlayHeader';
import { useEffect, useState } from 'react';
import { getPlayById } from 'meta/play-meta-util';

import "./clock.css";

const CurrentTimer = (props) => {
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Create a real-time date time counter
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return(
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <div className="counter">
            <h2>Current Time</h2>
            <div className="value">
              <span>{date.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentTimer;