import { useEffect, useRef, useState } from 'react';

export type SessionType = 'focus' | 'shortBreak' | 'longBreak';

const DEFAULT_TIMES = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60
};

export const usePomodoroTimer = () => {
  const [session, setSession] = useState<SessionType>('focus');

  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_TIMES.focus);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* Timer logic */
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          switchSession();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  /* Switch session automatically */
  const switchSession = () => {
    if (session === 'focus') {
      changeSession('shortBreak');
    } else {
      changeSession('focus');
    }
  };

  /* Manual session change */
  const changeSession = (newSession: SessionType) => {
    setSession(newSession);
    setTimeLeft(DEFAULT_TIMES[newSession]);
    setIsRunning(false);
  };

  /* Start */
  const start = () => {
    setIsRunning(true);
  };

  /* Pause */
  const pause = () => {
    setIsRunning(false);
  };

  /* Reset */
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(DEFAULT_TIMES[session]);
  };

  /* Update time from scroll wheel */
  const updateSessionTime = (seconds: number) => {
    setTimeLeft(seconds);
  };

  return {
    session,
    timeLeft,
    start,
    pause,
    reset,
    updateSessionTime,
    changeSession
  };
};
