import { useCallback, useEffect, useRef, useState } from 'react';

function useCountdownTimer(seconds: number) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountdownTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, resetCountdownTimer, startCountdown };
}

export default useCountdownTimer;
