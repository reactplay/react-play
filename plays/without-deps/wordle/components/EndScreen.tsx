import React from 'react';
import { AllTimeStats } from '../types';

export default function EndScreen(props: { allTimeStats: AllTimeStats; reset: () => void }) {
  const { allTimeStats, reset } = props;
  const winPerct = Math.ceil((allTimeStats.wins / allTimeStats.played) * 100);
  const gamesLost = allTimeStats.played - allTimeStats.wins;

  const statsTable = [
    ['Played', allTimeStats.played],
    ['Win %', winPerct],
    ['Daily Current Streak', allTimeStats.streak],
    ['Daily Highest Streak', allTimeStats.highestStreak]
  ];
  const getWidth = (row: number) => Math.ceil((row / allTimeStats.played) * 100);

  return (
    <div className="end-screen w-4/5 lg:w-2/6 h-4/5 bg-default absolute z-10 rounded-lg flex flex-col items-center justify-center space-y-4 opacity-0 font-wordle">
      <h4 className="text-left text-slate-200 font-bold text-sm lg:text-lg w-3/5 pl-4">
        STATISTICS
      </h4>
      <div className="w-3/5 py-2 space-x-2 flex items-center justify-evenly text-white text-center">
        {statsTable.map((statistic) => {
          return (
            <div className="flex-1 h-full grid grid-rows-2">
              <p className="text-2xl lg:text-4xl">{statistic[1]}</p>
              <p className="text-[0.625rem] lg:text-xs w-full flex items-center justify-center">
                {[statistic[0]]}
              </p>
            </div>
          );
        })}
      </div>
      <h4 className="text-left to-slate-200 font-bold text-sm lg:text-lg w-3/5 pl-4">
        GUESS DISTRIBUTION
      </h4>

      <div className="w-3/5 text-slate-100 text-sm text-center">
        {allTimeStats.winsByAttempts.map((row, index) => {
          return (
            <div className="py-1 flex items-center justify-start space-x-2">
              <div className="font-bold w-3">{index + 1}</div>
              <span
                className="w-full bg-wrong rounded-md font-medium"
                style={{ width: `${getWidth(row) || 10}%` }}
              >
                {row}
              </span>
            </div>
          );
        })}
        <div className="py-1 flex items-center justify-start space-x-2">
          <div className="font-bold w-3">✘</div>
          <span
            className="w-full bg-wrong rounded-md font-medium"
            style={{ width: `${getWidth(gamesLost) || 10}%` }}
          >
            {gamesLost}
          </span>
        </div>
      </div>

      <button
        className={
          'reset-button w-32 h-9 lg:w-36 lg:h-10 bg-correct rounded-2xl text-white text-xs lg:text-sm font-medium p-px ' +
          'hover:bg-[#60a25a] transition active:bg-correct mt-4'
        }
        onClick={() => reset()}
      >
        START NEW GAME
      </button>
    </div>
  );
}
