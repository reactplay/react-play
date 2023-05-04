import './styles.css';
import React, { useEffect } from 'react';
import Message from './components/Message';
import Score from './components/Score';

function NumberGuessingGame() {
  // Your Code Start below.

  const [result, setResult] = React.useState<'greater' | 'equal' | 'smaller' | null>(null);
  const [guessCount, setGuessCount] = React.useState<number>(1);

  const randomNumberGenerator = (): number => {
    return Math.floor(Math.random() * 100) + 1;
  };

  // let randomNumber: number = 0
  const [randomNumber, setRandomNumber] = React.useState<number>(0);
  useEffect(() => {
    setRandomNumber(randomNumberGenerator());
  }, []);

  const handleClick = (): void => {
    const guessedNumberInput = document.getElementById('guessedNumber') as HTMLInputElement;
    const guessedNumber: number = parseInt(guessedNumberInput.value);

    if (randomNumber > guessedNumber) {
      setGuessCount(guessCount + 1);
      setResult('greater');
    } else if (randomNumber < guessedNumber) {
      setGuessCount(guessCount + 1);
      setResult('smaller');
    } else if (randomNumber === guessedNumber) {
      setResult('equal');
    }
  };

  const handleReset = (): void => {
    setResult(null);
    const guessedNumberInput = document.getElementById('guessedNumber') as HTMLInputElement;
    guessedNumberInput.value = '';
    setRandomNumber(randomNumberGenerator());
    setGuessCount(0);
  };

  return (
    <>
      <div className="container">
        <h1>GUESS THE NUMBER: A GAME</h1>
        <input id="guessedNumber" max={100} min={1} type="number" />
        <div className="buttons">
          <button className="btn" onClick={handleClick}>
            Guess
          </button>
          <button className="btn" onClick={handleReset}>
            Restart
          </button>
        </div>
        {result === 'greater' && <Message message="Guess a greater number" />}
        {result === 'smaller' && <Message message="Guess a smaller number" />}
        {result === 'equal' && (
          <React.Fragment>
            <Message message="Congratulations! You guessed it right" />{' '}
            <Score guessCount={guessCount} />
          </React.Fragment>
        )}
      </div>
    </>
  );
}

export default NumberGuessingGame;
