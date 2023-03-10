import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// WARNING: Do not change the entry componenet name
function TheNumbersGame(props) {
  // Your Code Start below.
  const [guess, setGuess] = useState('');
  // const [message, setMessage] = useState('Guess a number in the given range');
  const [moves, setMoves] = useState(5);
  const [minimum, setMinimum] = useState('');
  const [target, setTarget] = useState(-1);
  const [maximum, setMaximum] = useState('');
  const [guessedCorrectly, setGuessedCorrectly] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  // the range cannot be reset while in the middle of the game. It can only be reset after the game is over.

  useEffect(() => {
    if (!isNaN(minimum) && !isNaN(maximum)) {
      setTarget(Math.floor(Math.random() * (maximum - minimum) + minimum));
    }
  }, [minimum, maximum]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableInput(true);

    if (guessedCorrectly === true) {
      toast.success('You have already guessed the correct answer');

      return;
    }
    if (minimum >= maximum) {
      toast.error('Minimum must be less than maximum');

      return;
    }
    if (moves <= 0) {
      setMoves(0);
      toast.error(`You have used up all of the moves.The correct answer was ${target}`);

      return;
    }
    setMoves(moves - 1);

    if (guess < minimum || guess > maximum) {
      toast.error('Your guess is out of bounds');
    } else if (guess === target) {
      toast.success(`You guessed it right in ${6 - moves} moves!`);
      setGuessedCorrectly(true);

      return;
    } else if (guess < target) {
      toast.error(`Your guess is too low. The correct answer is ${target}`);
    } else {
      toast.error(`Your guess is too high. The correct answer is ${target}`);
    }
  };

  const handleReset = () => {
    toast.info('The game has been reset');
    setGuess('');
    // setMessage('Guess a number in the given range');
    setMoves(5);
    setMinimum('');
    setMaximum('');
    setTarget(-1);
    setGuessedCorrectly(false);
    setDisableInput(false);
  };

  const checkValue = (value) => {
    if (value === '' || value < 0 || isNaN(parseInt(value))) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <form onSubmit={handleSubmit}>
          <div className="setMinMax">
            <input
              required
              disabled={disableInput}
              placeholder="0"
              type="text"
              value={minimum}
              onChange={(event) => {
                checkValue(event.target.value)
                  ? setMinimum('')
                  : setMinimum(parseInt(event.target.value));
              }}
            />

            <input
              required
              disabled={disableInput}
              placeholder="100"
              type="text"
              value={maximum}
              onChange={(event) => {
                checkValue(event.target.value)
                  ? setMaximum('')
                  : setMaximum(parseInt(event.target.value));
              }}
            />
          </div>

          <input
            required
            placeholder="Enter a number"
            type="text"
            value={guess}
            onChange={(event) => {
              checkValue(event.target.value)
                ? setGuess('')
                : setGuess(parseInt(event.target.value));
            }}
          />

          <div className="moves">
            <p>Number of moves left: {moves}</p>
          </div>

          <div class="buttons">
            <button type="submit">Guess</button>
            <div className="reset">
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </form>
        <ToastContainer toastStyle={{ backgroundColor: '#202d40', color: 'white' }} />
        {/* Your Code Ends Here */}
      </div>
    </>
  );
}

export default TheNumbersGame;
