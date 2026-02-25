import React from 'react';
import { SessionType } from '../hooks/usePomodoroTimer';

interface Props {
  current: SessionType;
  onChange: (session: SessionType) => void;
}

const SessionSelector: React.FC<Props> = ({ current, onChange }) => {
  const sessions: SessionType[] = ['focus', 'shortBreak', 'longBreak'];

  const labels: Record<SessionType, string> = {
    focus: 'Focus',
    shortBreak: 'Short Break',
    longBreak: 'Long Break'
  };

  return (
    <div className="session-selector">
      {sessions.map((session) => (
        <button
          className={current === session ? 'session-btn active' : 'session-btn'}
          key={session}
          onClick={() => onChange(session)}
        >
          {labels[session]}
        </button>
      ))}
    </div>
  );
};

export default SessionSelector;
