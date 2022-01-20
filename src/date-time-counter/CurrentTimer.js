
import { useEffect, useState } from 'react';

const CurrentTimer = () => {
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
      Current Time: <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default CurrentTimer;