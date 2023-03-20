import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

// React toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaTimes, FaRegCircle } from 'react-icons/fa';
import PlayAgainButton from './PlayAgainButton';
import Icon from './Icon';

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
        <div className="flex justify-center play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1 className="text-2xl text-center md:text-3xl">Multiplayer Tic Tac Toe</h1>
            <section className="flex justify-center">
              <button
                className="flex justify-center items-center w-28 h-16 m-3 cursor-pointer border rounded-lg bg-[#00f2fe] hover:border-black"
                onClick={() => setIsCross(true)}
              >
                <span className="hidden">Cross</span>
                <FaTimes className="text-2xl font-extrabold text-red-500" />
              </button>
              <button
                className="flex justify-center items-center w-28 h-16 m-3 cursor-pointer border rounded-lg bg-[#00f2fe] hover:border-black"
                onClick={() => setIsCross(false)}
              >
                <span className="hidden">Circle</span>
                <FaRegCircle className="text-2xl font-extrabold text-red-500" />
              </button>
            </section>

            <section className="flex items-center justify-center">
              <ToastContainer />
              <main>
                <div>
                  {finalMessage ? (
                    <div>
                      <h3 className="text-center">{finalMessage}</h3>
                      <div className="flex justify-center">
                        <PlayAgainButton onClick={onPlayAgainClick} />
                      </div>
                    </div>
                  ) : (
                    <h3 className="p-3 text-2xl font-bold text-center">
                      {isCross ? 'Turn : Cross' : 'Turn : Circle'}
                    </h3>
                  )}

                  <div className="grid grid-cols-3 gap-4">
                    {gameArray.map((ele, i) => (
                      <div
                        className="md:w-24 md:h-24 w-32 flex justify-center items-center h-32 bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer"
                        key={i}
                        onClick={() => changeItem(i)}
                      >
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
