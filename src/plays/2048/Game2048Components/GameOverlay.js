import React from 'react';
import '../Game2048Styles/game-overlay.css';
import gameOver from '../GameAudio/gameOver.wav';
import gameWin from '../GameAudio/gameWin.wav';

function GameOverlay(props) {
  const over = new Audio(gameOver);
  const win = new Audio(gameWin);

  const isStatusOver = props.status === 'over';
  const isStatusWon = props.status === 'won';

  {
    isStatusOver ? over.play() : over.pause();
  } // Play game over sound effect
  {
    isStatusWon === 'win' ? win.play() : win.pause();
  } // Play game win sound effect

  return (
    <>
      <div
        className={
          isStatusOver
            ? 'game-overlay game-overlay--over active'
            : 'game-overlay game-overlay--over'
        }
      >
        <h1 className="game-overlay__message">Game Over!</h1>
        <button className="game-overlay__try-again" onClick={props.tryAgain}>
          Try Again
        </button>
      </div>
      <div
        className={
          isStatusWon ? 'game-overlay game-overlay--won active' : 'game-overlay game-overlay--won'
        }
      >
        <h1 className="game-overlay__message">You win!</h1>
        <button
          className="game-overlay__keep-going"
          onClick={() => {
            props.setStatus('continue');
          }}
        >
          Keep going
        </button>
        <button className="game-overlay__try-again" onClick={props.tryAgain}>
          Try Again
        </button>
      </div>
    </>
  );
}

export default GameOverlay;
