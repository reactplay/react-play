import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta';
import { Link } from "react-router-dom";
import { PlayLinks } from 'common';
import { RiMedal2Fill } from "react-icons/ri";
import { IoMdTrophy } from "react-icons/io";
import { IoRibbon } from "react-icons/io5";


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
          <div>
            <div className="header-wrapper">
              <h3 className="header-title">Header Title Goes here</h3>
              <Link to="google.com" className="play-level play-level-1">
                <IoRibbon size="16px" />
                Beginner</Link>
              <Link to="google.com" className="play-level play-level-2"><RiMedal2Fill size="16px" /> Internemdiate</Link>
              <Link to="google.com" className="play-level play-level-3"><IoMdTrophy size="16px" /> Advanced</Link>
            </div>
            <div className="header-secondary">
              <div className="header-author">by <strong>GreenRoots Media</strong></div>
              <ul className="list-tags">
                <li>
                  <Link className="play-tag" to="google.com">Schedule</Link>
                </li>
                <li>
                  <Link className="play-tag" to="google.com">Hook</Link>
                </li>
                <li>
                  <Link className="play-tag" to="google.com">Tree</Link>
                </li>
              </ul>
            </div>
          </div>
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