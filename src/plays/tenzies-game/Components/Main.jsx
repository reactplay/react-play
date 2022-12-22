import React from 'react';

import Dice from './Dice';
import Confetti from 'react-confetti';
const Main = () => {
  const [dices, setDices] = React.useState(diceValues());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dices.every((die) => die.isHeld);
    const firstValue = dices[0].value;
    const allSameValue = dices.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dices]);

  function diceValues(oldValue) {
    let elArr = [];
    for (let i = 0; i < 10; i++) {
      if (oldValue) {
        if (!oldValue[i].isHeld) {
          elArr.push({
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false
          });
        } else {
          elArr.push(oldValue[i]);
        }
      } else {
        elArr.push({
          value: Math.floor(Math.random() * 6) + 1,
          isHeld: false
        });
      }
    }

    return elArr;
  }

  function rollDice() {
    setDices(diceValues(dices));
    if (tenzies) {
      setDices(diceValues());
      setTenzies(false);
    }
  }

  function toggle(id) {
    setDices((prevDices) => {
      let newDice = prevDices.map((prevDice, index) => {
        if (index != id) {
          return { ...prevDice };
        } else {
          return { ...prevDice, isHeld: !prevDice.isHeld };
        }
      });

      return newDice;
    });
  }

  const diceEl = dices.map((diceObj, index) => {
    return (
      <Dice
        isHeld={diceObj.isHeld}
        key={index}
        toggle={() => toggle(index)}
        value={diceObj.value}
      />
    );
  });

  return (
    <div className="tenzies_main">
      {tenzies && <Confetti style={{ position: 'fixed' }} />}
      <h1 className="tenzies_title">Tenzies</h1>
      <p className="tenzies_instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between
        rolls.
      </p>
      <div className="tenzies_dice_container">{diceEl}</div>
      <button className="tenzies_roll_btn" onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </div>
  );
};

export default Main;
