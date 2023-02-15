import { plural, sleep } from './utils.js';

export class GameState {
  constructor(totalBalls, totalWickets, target) {
    this.runs = 0;
    this.balls = 0;
    this.wickets = 0;

    this.timeline = [];

    this.totalBalls = totalBalls;
    this.totalWickets = totalWickets;
    this.target = target;
  }
}

export class GameRef {
  constructor(totalBalls, totalWickets, target) {
    this.runs = 0;
    this.balls = 0;
    this.wickets = 0;

    this.totalBalls = totalBalls;
    this.totalWickets = totalWickets;
    this.target = target;

    this.stop = false;
    this.timeline = [];
  }
}

export const ShotName = Object.freeze({
  UPPERCUT: 'uppercut',
  SQUARECUT: 'squarecut',
  COVERDRIVE: 'coverdrive',
  LEGGLANCE: 'legglance',
  SWEEP: 'sweep',
  ONDRIVE: 'ondrive'
});

export const Result = Object.freeze({
  WON: 'WON',
  LOSS: 'LOSS',
  TIE: 'TIE'
});

export function determineAndUpdateScore(shotGap) {
  const totalShotGap = Math.abs(shotGap[0]) + Math.abs(shotGap[1]);
  let runsMade;

  if (0 <= totalShotGap && totalShotGap < 8) runsMade = 6;
  else if (8 <= totalShotGap && totalShotGap < 16) runsMade = 4;
  else if (16 <= totalShotGap && totalShotGap < 24) runsMade = 3;
  else if (24 <= totalShotGap && totalShotGap < 32) runsMade = 2;
  else if (32 <= totalShotGap && totalShotGap < 40) runsMade = 1;
  else runsMade = 0;

  return runsMade;
}

export function getShotName(shotGap) {
  if (shotGap[0] > 0) {
    if (shotGap[1] > 10) return ShotName.UPPERCUT;
    else if (shotGap[1] <= 10 && shotGap[1] >= -10) return ShotName.SQUARECUT;
    else if (shotGap[1] < -10) return ShotName.COVERDRIVE;
  } else {
    if (shotGap[1] > 10) return ShotName.LEGGLANCE;
    else if (shotGap[1] <= 10 && shotGap[1] >= -10) return ShotName.SWEEP;
    else if (shotGap[1] < -10) return ShotName.ONDRIVE;
  }
}

export function initShotBallPosition(ballCentre, pitchRef, shotBallRef) {
  const pitchRect = pitchRef.current.getBoundingClientRect();
  shotBallRef.current.style.setProperty('--shot-left', ballCentre[0] - pitchRect.left - 20 + 'px');
  shotBallRef.current.style.setProperty('--shot-top', ballCentre[1] - pitchRect.top - 20 + 'px');
}

export function hitTheBall(event, ballCentre, shotBallRef) {
  const shotGap = [event.clientX - ballCentre[0], event.clientY - ballCentre[1]];

  const shotName = getShotName(shotGap);

  // Set shot ball's direction to be hit
  shotBallRef.current.classList.remove('invisible');
  shotBallRef.current.classList.add(shotName);

  // Reset shot ball's position now
  sleep(1 * 1000).then((resp) => {
    shotBallRef.current.classList.add('invisible');
    shotBallRef.current.classList.remove(shotName);

    shotBallRef.current.style.setProperty('--shot-left', '0px');
    shotBallRef.current.style.setProperty('--shot-top', '0px');
  });

  return shotGap;
}

export function incrementBall(
  gameState,
  setGameState,
  setCommentary,
  runsMade = 0,
  wicket = 0,
  action = '•'
) {
  setGameState({
    runs: gameState.runs + runsMade,
    balls: gameState.balls + 1,
    wickets: gameState.wickets + wicket,

    timeline: [...gameState.timeline.reverse().slice(0, 12).reverse(), action],

    totalBalls: gameState.totalBalls,
    totalWickets: gameState.totalWickets,
    target: gameState.target
  });

  if (!runsMade && !wicket) {
    // It's a dot ball
    setCommentary('Swings the bat but Batsman missed the shot!');
  } else if (runsMade && !wicket) {
    // Batsman scored runs
    setCommentary(
      runsMade > 0 ? `You scored ${runsMade} run${plural(runsMade)}!` : 'Alas! no runs in the ball!'
    );
  } else if (!runsMade && wicket) {
    // It's a wicket
    setCommentary('Sheeeesh! Ball hits the stumps! Samir is out!');
  }
}

export function matchTied(gameRef) {
  return (
    gameRef.current.runs === gameRef.current.target &&
    (gameRef.current.wickets > gameRef.current.totalWickets ||
      gameRef.current.totalBalls - gameRef.current.balls === 0)
  );
}
