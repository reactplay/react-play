import { useEffect, useState } from 'react';

const Timer = ({ nextNumber, start, setStart, setResult }) => {
  const [timeCount, setTimeCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (start) {
        setTimeCount((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    if (nextNumber === 26) {
      clearInterval(timer);
      setResult(timeCount);
      setStart(false);
      setTimeCount(0);
    }

    return () => clearInterval(timer);
  }, [timeCount, start]);

  return <span>{timeCount}s</span>;
};

export default Timer;
