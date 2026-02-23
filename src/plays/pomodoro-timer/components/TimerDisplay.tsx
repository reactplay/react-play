import React, { useEffect, useRef, useState } from 'react';

import DualTimePicker from './DualTimePicker';

interface Props {
  session: string;
  timeLeft: number;
  onTimeChange: (seconds: number) => void;
}

const TimerDisplay: React.FC<Props> = ({ session, timeLeft, onTimeChange }) => {
  const [editing, setEditing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (m: number, s: number) => {
    onTimeChange(m * 60 + s);
  };

  return (
    <div className="timer-display" ref={containerRef}>
      <div className="session-label">{session.toUpperCase()}</div>

      {!editing && (
        <div className="timer-time" onClick={() => setEditing(true)}>
          {formatted}
        </div>
      )}

      {editing && <DualTimePicker minutes={minutes} seconds={seconds} onChange={handleChange} />}
    </div>
  );
};

export default TimerDisplay;
