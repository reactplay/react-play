import React, { useState } from 'react';
import Game from './Game2048Components/Game';
import GameHeader from './Game2048Components/GameHeader';
import GameOverlay from './Game2048Components/GameOverlay';
import Modal from './Game2048Components/Modal';
import VideoMusic from './Game2048Components/VideoMusic';

import './Game2048Styles/game-header.css';
import './Game2048Styles/game-overlay.css';
import './Game2048Styles/game.css';

function GameTwentyFourtyEight() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(localStorage.getItem('Best') || 0);
  const [game, setGame] = useState(0);
  const [status, setStatus] = useState('running');

  const resetGame = () => {
    setScore(0);
    setGame(game + 1);
    setStatus('running');
  };

  const cacheBest = (score) => {
    localStorage.setItem('Best', score);
    setBest(score);
  };
  const handleStatus = (status) => setStatus(status);

  return (
    <>
      <GameHeader best={best} resetGame={resetGame} score={score} />
      <GameOverlay setStatus={handleStatus} status={status} tryAgain={resetGame} />
      <Modal status={status} />
      <Game
        best={best}
        key={game}
        score={score}
        setBest={cacheBest}
        setScore={setScore}
        setStatus={setStatus}
        status={status}
      />
      <VideoMusic />
    </>
  );
}

export default GameTwentyFourtyEight;
