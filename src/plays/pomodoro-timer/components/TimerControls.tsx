import React from 'react';

interface Props {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<Props> = ({ onStart, onPause, onReset }) => {
  return (
    <div className="timer-controls">
      <button className="control-btn start" onClick={onStart}>
        Start
      </button>

      <button className="control-btn pause" onClick={onPause}>
        Pause
      </button>

      <button className="control-btn reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
