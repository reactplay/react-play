import { toast } from 'react-toastify';
import { GAME_ARRAY } from '../data';

import findWinner from './findWinner';
import checkDraw from './checkDraw';

type ChangeItemProps = {
  index: number;
  isFinished: boolean;
  isCross: boolean;
  setIsCross: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function changeItem({ index, isFinished, isCross, setIsCross }: ChangeItemProps) {
  if (isFinished) {
    return toast('Game is already finished!', { position: 'bottom-center', type: 'success' });
  }

  if (GAME_ARRAY[index] === '') {
    GAME_ARRAY[index] = isCross ? 'cross' : 'circle';
    setIsCross(!isCross);
  } else {
    return toast('This place is already occupied! Hello', {
      position: 'bottom-center',
      type: 'error'
    });
  }

  findWinner();
  checkDraw();
}
