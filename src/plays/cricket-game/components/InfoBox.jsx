import { plural } from '../game/utils';

export default function InfoBox({ matchInProgress, gameState }) {
  const { runs, balls, wickets, totalBalls, totalWickets, target } = gameState;

  const runsLeft = target - runs;
  const wicketsLeft = totalWickets - wickets;
  const ballsLeft = totalBalls - balls;

  return (
    <div className="info-box w-1/2 md:w-3/5 h-4/5 bg-slate-200 rounded-[10px] md:rounded-[20px] flex flex-col justify-center items-center text-center text-sm md:text-lg opacity-0 py-1 px-2 leading-3 md:leading-7 font-cricket-game">
      {matchInProgress &&
        `Need ${runsLeft} run${plural(ballsLeft)} to win from ` +
          `${wicketsLeft} wicket${plural(wicketsLeft)} and ${ballsLeft} ball${plural(ballsLeft)}`}
    </div>
  );
}
