import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

// React toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaTimes, FaRegCircle } from 'react-icons/fa';
import PlayAgainButton from './PlayAgainButton';
import Icon from './Icon';

// import './TicTacToe.css';
// import './Game.css';
import './styles.css';
// import './styles.{{style}}';

const gameArray = new Array(9).fill('');

function MultiplayerTicTacToe(props: any) {
  // Your Code Start below.

  const [isCross, setIsCross] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [finalMessage, setFinalMessage] = useState('');
  let count = 0;

  // Game Logic
  const findWinner = () => {
    const WINNING_COMBINATION = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    WINNING_COMBINATION.forEach((combination) => {
      if (
        gameArray[combination[0]] === gameArray[combination[1]] &&
        gameArray[combination[1]] === gameArray[combination[2]] &&
        gameArray[combination[0]] !== ''
      ) {
        setFinalMessage(gameArray[combination[0]] + ' is the winner!');
        setIsFinished(true);
      }
    });
  };

  // Play Again button click event
  const onPlayAgainClick = () => {
    setIsCross(true);
    setFinalMessage('');
    setIsFinished(false);
    gameArray.fill('');
  };

  // Draw
  const checkDraw = () => {
    gameArray.forEach((pos) => {
      if (pos === 'cross' || pos === 'circle') {
        count++;
      }
      if (gameArray.length === 9 && gameArray.indexOf('') < 0) {
        setFinalMessage('Game Draw!');
        setIsFinished(true);
      }
    });

    <div className="center">
      <PlayAgainButton onClick={onPlayAgainClick} />
    </div>;
  };

  // Card on click
  const changeItem = (index: number) => {
    if (isFinished) {
      return toast('Game is already finished!', { position: 'bottom-center', type: 'success' });
    }

    if (gameArray[index] === '') {
      gameArray[index] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return toast('This place is already occupied! Hello', {
        position: 'bottom-center',
        type: 'error'
      });
    }

    findWinner();
    checkDraw();
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1>Multiplayer Tic Tac Toe</h1>
            <section className="button-group">
              <button className="game-button" onClick={() => setIsCross(true)}>
                <span className="hidden">Cross</span>
                <FaTimes className="icon" />
              </button>
              <button className="game-button" onClick={() => setIsCross(false)}>
                <span className="hidden">Circle</span>
                <FaRegCircle className="icon" />
              </button>
            </section>

            <section className="center">
              <ToastContainer />
              <main>
                <div>
                  {finalMessage ? (
                    <div>
                      <h3 className="text-center">{finalMessage}</h3>
                      <div className="center">
                        <PlayAgainButton onClick={onPlayAgainClick} />
                      </div>
                    </div>
                  ) : (
                    <h3>{isCross ? 'Turn : Cross' : 'Turn : Circle'}</h3>
                  )}

                  <div className="ttc_grid">
                    {gameArray.map((ele, i) => (
                      <div className="game-card center" key={i} onClick={() => changeItem(i)}>
                        <Icon choice={gameArray[i]} />
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </section>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default MultiplayerTicTacToe;
