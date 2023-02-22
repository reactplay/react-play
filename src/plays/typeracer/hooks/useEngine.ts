import { useCallback, useEffect, useState } from 'react';
import { countErrors } from '../utils/helpers';
import useCountdownTimer from './useCountdownTimer';
import useTyping from './useTyping';
import useWords from './useWords';

export type State = 'start' | 'run' | 'finish';
const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;
const useEngine = () => {
  const [state, setState] = useState<State>('start');
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { resetCountdownTimer, startCountdown, timeLeft } = useCountdownTimer(COUNTDOWN_SECONDS);

  const { clearTyped, cursor, resetTotalTyped, totalTyped, typed } = useTyping(state !== 'finish');

  const [errors, setErrors] = useState(0);
  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prev) => prev + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  const isStarting = state === 'start' && cursor > 0;
  const areWordsFinished = cursor == words.length;
  useEffect(() => {
    if (isStarting) {
      setState('run');
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  useEffect(() => {
    if (!timeLeft) {
      setState('finish');
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  useEffect(() => {
    if (areWordsFinished) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [cursor, sumErrors, updateWords, clearTyped, areWordsFinished, words, typed]);

  const restart = useCallback(() => {
    resetCountdownTimer();
    resetTotalTyped();
    setState('start');
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdownTimer, resetTotalTyped]);

  return { state, words, timeLeft, typed, errors, totalTyped, restart };
};

export default useEngine;
