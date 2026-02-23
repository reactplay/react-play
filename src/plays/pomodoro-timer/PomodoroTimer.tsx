import React from 'react';

import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import SessionSelector from './components/SessionSelector';

import { usePomodoroTimer, SessionType } from './hooks/usePomodoroTimer';

import './styles.css';

function PomodoroTimer(): JSX.Element {
  const { session, timeLeft, start, pause, reset, updateSessionTime, changeSession } =
    usePomodoroTimer();

  return (
    <div className="play-details">
      <div className="play-details-body">
        <div className="pomodoro-card">
          {/* Title */}
          <div className="pomodoro-title">Pomodoro Timer</div>

          {/* Session Selector */}
          <SessionSelector current={session} onChange={changeSession} />

          {/* Timer Display */}
          <TimerDisplay session={session} timeLeft={timeLeft} onTimeChange={updateSessionTime} />

          {/* Controls */}
          <TimerControls onPause={pause} onReset={reset} onStart={start} />
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
