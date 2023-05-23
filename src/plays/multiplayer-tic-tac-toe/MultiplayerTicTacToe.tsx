import React, { useState } from 'react';

// React toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ReactPlay Imports
import PlayHeader from 'common/playlists/PlayHeader';

// Importing data
import { GAME_ARRAY, WINNING_COMBINATION } from './data';

// Components
import PlayAgainButton from './components/PlayAgainButton';
import ButtonGroup from './components/ButtonGroup';
import FinalMessage from './components/FinalMessage';
import GameGrid from './components/GameGrid';

function MultiplayerTicTacToe(props: any) {
  const [isCross, setIsCross] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [finalMessage, setFinalMessage] = useState('');
  let count = 0;

  // ! Game Logic
  const findWinner = () => {
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
  };

  // ! Play Again button click event
  const onPlayAgainClick = () => {
    setIsCross(true);
    setFinalMessage('');
    setIsFinished(false);
    GAME_ARRAY.fill('');
  };

  // ! Draw
  const checkDraw = () => {
    GAME_ARRAY.forEach((pos) => {
      if (pos === 'cross' || pos === 'circle') {
        count++;
      }
      if (GAME_ARRAY.length === 9 && GAME_ARRAY.indexOf('') < 0) {
        setFinalMessage('Game Draw!');
        setIsFinished(true);
      }
    });

    <div className="center">
      <PlayAgainButton onClick={onPlayAgainClick} />
    </div>;
  };

  // ! Card on click
  const changeItem = (index: number) => {
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
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="flex justify-center play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1 className="text-2xl text-center md:text-3xl">Multiplayer Tic Tac Toe</h1>
            <ButtonGroup setIsCross={setIsCross} />

            <section className="flex items-center justify-center">
              <ToastContainer />
              <main>
                <div>
                  <FinalMessage
                    finalMessage={finalMessage}
                    isCross={isCross}
                    onPlayAgainClick={onPlayAgainClick}
                  />

                  <GameGrid changeItem={changeItem} />
                </div>
              </main>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiplayerTicTacToe;
