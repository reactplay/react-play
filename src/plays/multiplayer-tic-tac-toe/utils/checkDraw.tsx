import React from 'react';
import PlayAgainButton from '../PlayAgainButton';
import { GAME_ARRAY } from '../data';

type CheckDrawProps = {
  count: number;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setFinalMessage: React.Dispatch<React.SetStateAction<string>>;
  onPlayAgainClick: () => void;
};

export default function checkDraw({
  count,
  setFinalMessage,
  setIsFinished,
  onPlayAgainClick
}: CheckDrawProps) {
  GAME_ARRAY.forEach((pos) => {
    if (pos === 'cross' || pos === 'circle') {
      count++;
    }
    if (GAME_ARRAY.length === 9 && GAME_ARRAY.indexOf('') < 0) {
      setFinalMessage('Game Draw!');
      setIsFinished(true);
    }
  });

  return (
    <React.Fragment>
      <PlayAgainButton onClick={onPlayAgainClick} />
    </React.Fragment>
  );
}
