import { GAME_ARRAY, WINNING_COMBINATION } from '../data';

type FindWinnerProps = {
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setFinalMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function findWinner({ setFinalMessage, setIsFinished }: FindWinnerProps): void {
  WINNING_COMBINATION.forEach((combination) => {
    if (
      GAME_ARRAY[combination[0]] === GAME_ARRAY[combination[1]] &&
      GAME_ARRAY[combination[1]] === GAME_ARRAY[combination[2]] &&
      GAME_ARRAY[combination[0]] !== ''
    ) {
      setFinalMessage(GAME_ARRAY[combination[0]] + ' is the winner!');
      setIsFinished(true);
    }
  });
}
