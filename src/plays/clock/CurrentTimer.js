
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta';
import { PlayLinks } from 'common';

const CurrentTimer = () => {
  const location = useLocation();
  const [play, setPlay] = useState();
  const { id } = location.state;
  useEffect(() => {
    
    setPlay(getPlayById(id));
  }, [id]);
  // Create a real-time date time counter
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return(

    <div className="counter">
      <PlayLinks play={play} />
      Current Time: <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default CurrentTimer;