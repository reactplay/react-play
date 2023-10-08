import React, { useState, useRef } from 'react';
import './styles.css';

function Faisalplay(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const startStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // 10 milliseconds
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = (ms % 1000).toString().slice(0, 2);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Faisalplay;
