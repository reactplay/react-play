import { useState } from 'react';
import dice1 from '../assets/1.png';
import dice2 from '../assets/2.png';
import dice3 from '../assets/3.png';
import dice4 from '../assets/4.png';
import dice5 from '../assets/5.png';
import dice6 from '../assets/6.png';
import { randomNumber } from '../utils/randomNumber';

export const useRandom = () => {
  const [newScore, setNewScore] = useState(null);
  const [dice, setDice] = useState(null);

  // Get random number and dice
  function getRandom() {
    setNewScore(null);
    for (let i = 1; i <= 6; i++) {
      (function (i, count) {
        setTimeout(() => {
          const number = randomNumber(1, 6);
          if (count === 6) {
            setNewScore(number);
          }
          switch (number) {
            case 1:
              setDice(dice1);

              break;
            case 2:
              setDice(dice2);

              break;
            case 3:
              setDice(dice3);

              break;
            case 4:
              setDice(dice4);

              break;
            case 5:
              setDice(dice5);

              break;
            case 6:
              setDice(dice6);
          }
        }, i);
      })(i * 100, i);
    }
  }

  // Return
  return {
    newScore,
    dice,
    getRandom
  };
};
