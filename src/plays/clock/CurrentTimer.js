
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta';
import { PlayLinks } from 'common';
import { BsPlayFill, BsShareFill, BsGithub } from "react-icons/bs";

const CurrentTimer = () => {
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
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
        <div className="play-details-header">
          <h3 className="header-title">Header Title Goes here</h3>
          <div className="header-actions">
            <PlayLinks play={play} />
          </div>
        </div>
        <div className="play-details-body">
          <div className="counter">
            Current Time: <h1>{date.toLocaleTimeString()}</h1>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default CurrentTimer;