import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

import { useState, useEffect, useRef } from 'react';

// Asset imports
import wicketImg from './assets/wicket.svg';
import hitWicketImg from './assets/hitwicket.svg';

// Component imports
import Modal from './components/Modal';
import Pitch from './components/Pitch';
import ScorePanel from './components/ScorePanel';
import TopBar from './components/TopBar';
import EndGameScreen from './components/EndGameScreen';

// Game logic imports
import { LEVELS } from './game/levels';
import { sleep } from './game/utils';
import {
  GameRef,
  GameState,
  determineAndUpdateScore,
  initShotBallPosition,
  hitTheBall,
  incrementBall,
  Result,
  matchTied
} from './game/gameLogic.js';

// Audio imports
import { shotSound, gameTrack, crowdCheering, crowdDisappointed, wicketHit } from './game/utils.js';

// Get the level from user's local storage
let keyName = 'cricket-game-user-level';
let userLevel = localStorage.getItem(keyName);

if (!userLevel) {
  localStorage.setItem(keyName, '1');
  userLevel = 1;
} else {
  userLevel = Number(userLevel) || 1;
}

function setUserLevel(currLevel) {
  const keyName = 'cricket-game-user-level';
  const newLevel = currLevel < 20 ? currLevel + 1 : currLevel;
  localStorage.setItem(keyName, String(newLevel));
}

function CricketGame(props) {
  const currLevelInfo = LEVELS[userLevel];

  // Initializing state
  const [gameState, setGameState] = useState(
    new GameState(currLevelInfo.totalBalls, currLevelInfo.totalWickets, currLevelInfo.target)
  );
  const [commentary, setCommentary] = useState('');

  // Initializing refs
  const matchInProgress = useRef(false);
  const batSwing = useRef(false);
  const ballEndLeftDirection = useRef(0);
  const listenForBatSwing = useRef(false);

  const gameRef = useRef(
    new GameRef(currLevelInfo.totalBalls, currLevelInfo.totalWickets, currLevelInfo.target)
  );

  // Initializing component refs
  const ballRef = useRef();
  const shotBallRef = useRef();
  const hitBoxRef = useRef();
  const pitchRef = useRef();
  const wicketRef = useRef();
  const modalRef = useRef();
  const endScreenRef = useRef();

  // For end game result
  const [resultTitle, setResultTitle] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const [resultEnum, setResultEnum] = useState(Result.WON);

  function setEndScreen(result) {
    if (result === Result.WON) {
      endScreenRef.current.classList.add('end-game-screen-win');

      setResultTitle('YOU WON! 🎊');
      setResultDesc(
        'You successfully chased the runs without losing all your wickets or overs. \nYou can proceed to next level!'
      );
      crowdCheering.play();
    } else if (result === Result.TIE) {
      endScreenRef.current.classList.add('end-game-screen-loss-tie');
      setResultTitle('MATCH TIED');
      setResultDesc('You and computer scored amount of runs. Try this level again!');
      crowdDisappointed.play();
    } else {
      endScreenRef.current.classList.add('end-game-screen-loss-tie');
      setResultTitle('YOU LOST...');
      setResultDesc(
        'You lost all your Wickets or the Innings were over. But you could not chase the given target within it. You lost! Try this level again.'
      );
      crowdDisappointed.play();
    }
    setResultEnum(result);
    endScreenRef.current.classList.remove('hidden');
  }

  // Game logic
  function onBatSwing(event) {
    if (!matchInProgress.current) return;

    if (batSwing.current) return;

    if (!listenForBatSwing.current) return;

    batSwing.current = true;
    const ballRect = ballRef.current.getBoundingClientRect();

    // Check if mouse pointer came under this ball's range
    const ballWasHit =
      event.clientX > ballRect.left - 20 &&
      event.clientX < ballRect.right + 20 &&
      event.clientY > ballRect.top - 20 &&
      event.clientY < ballRect.bottom + 20;

    if (ballWasHit) {
      const ballCentre = [
        (ballRect.right + ballRect.left) / 2,
        (ballRect.top + ballRect.bottom) / 2
      ];

      ballRef.current.classList.add('invisible');
      ballRef.current.classList.remove('throwit');

      shotSound.play();
      initShotBallPosition(ballCentre, pitchRef, shotBallRef);

      const shotGap = hitTheBall(event, ballCentre, shotBallRef);
      const runsMade = determineAndUpdateScore(shotGap);

      incrementBall(gameState, setGameState, setCommentary, runsMade, 0, runsMade);
    } else {
      if (ballEndLeftDirection.current >= 61) {
        wicketRef.current.src = hitWicketImg;
        incrementBall(gameState, setGameState, setCommentary, 0, 1, 'W');
        wicketHit.play();
      } else {
        incrementBall(gameState, setGameState, setCommentary, 0, 0, '•');
      }
    }
  }

  async function throwNextBall() {
    setCommentary('Incoming ball! 🔥');
    listenForBatSwing.current = true;

    ballRef.current.classList.remove('invisible');
    ballRef.current.classList.add('throwit');

    await sleep(3 * 1000);
    listenForBatSwing.current = false;

    ballRef.current.classList.add('invisible');
    ballRef.current.classList.remove('throwit');

    // Check weather batsman is out and ball hit the wicket
    if (!batSwing.current && ballEndLeftDirection.current >= 61) {
      wicketRef.current.src = hitWicketImg;
      incrementBall(gameRef.current, setGameState, setCommentary, 0, 1, 'W');
      wicketHit.play();
    } else if (!batSwing.current) {
      incrementBall(gameRef.current, setGameState, setCommentary, 0, 0, '•');
    }

    return true;
  }

  function prepareNextBall() {
    // get random coordinates for next ball's animation
    const bounceLeft = Math.floor(Math.random() * 7 + 26);
    const endLeft = Math.floor(Math.random() * 36 + 36);

    ballEndLeftDirection.current = endLeft;

    ballRef.current.style.setProperty('--bounce-left', bounceLeft + '%');
    ballRef.current.style.setProperty('--end-left', endLeft + '%');
  }

  async function startGame() {
    if (matchInProgress.current) return;

    matchInProgress.current = true;
    modalRef.current.classList.add('hidden');

    if (gameTrack.paused) gameTrack.play();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (gameRef.current.runs >= gameRef.current.target) {
        if (matchTied(gameRef)) {
          setCommentary('Whoa! This match was a Tie! 🤝');
          setEndScreen(Result.TIE);
        } else {
          setCommentary('Congrats! You chased the target! 🎉');
          setUserLevel(Number(userLevel));
          setEndScreen(Result.WON);
        }
      } else if (gameRef.current.wickets >= gameRef.current.totalWickets) {
        setCommentary('You are ALL OUT! You failed to chase the runs.');
        setEndScreen(Result.LOSS);
      } else if (gameRef.current.totalBalls - gameRef.current.balls === 0) {
        setCommentary('Innings are over! You failed to chase the runs.');
        setEndScreen(Result.LOSS);
      }

      batSwing.current = false;
      if (gameRef.current.stop) break;

      prepareNextBall();
      throwNextBall();
      await sleep(10 * 1000);
      wicketRef.current.src = wicketImg;
    }
  }

  // This useEffect will update Game reference object
  // Every time Game state is updated, so we can use it
  // for end game check
  useEffect(() => {
    const toStop =
      gameState.runs >= gameState.target ||
      gameState.wickets >= gameState.totalWickets ||
      gameState.totalBalls - gameState.balls === 0;

    gameRef.current = {
      runs: gameState.runs,
      balls: gameState.balls,
      wickets: gameState.wickets,

      totalBalls: gameRef.current.totalBalls,
      totalWickets: gameRef.current.totalWickets,
      target: gameRef.current.target,

      stop: toStop,
      timeline: gameState.timeline
    };
  }, [gameState]);

  // This is called once during first render to play
  // Audio on loop
  useEffect(() => {
    gameTrack.loop = true;
    gameTrack.autoplay = true;
    gameTrack.play();

    // The audio will stop playing
    // once the component is unmounted
    return () => gameTrack.pause();
  });

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="cricket-home-body w-full h-full bg-center bg-no-repeat bg-cover flex items-center justify-center overflow-y-visible md:overflow-y-hidden overflow-x-hidden font-cricket-game">
            <TopBar gameTrack={gameTrack} hitBoxRef={hitBoxRef} />

            <EndGameScreen
              endScreenRef={endScreenRef}
              result={resultEnum}
              resultDesc={resultDesc}
              resultTitle={resultTitle}
            />

            <Modal
              levelInfo={gameRef.current}
              modalRef={modalRef}
              startGame={startGame}
              userLevel={userLevel}
            />

            <Pitch
              ballRef={ballRef}
              hitBoxRef={hitBoxRef}
              pitchRef={pitchRef}
              shotBallRef={shotBallRef}
              wicketRef={wicketRef}
              onBatSwing={onBatSwing}
            />

            <ScorePanel
              commentary={commentary}
              gameState={gameState}
              matchInProgress={matchInProgress}
              userLevel={userLevel}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CricketGame;
