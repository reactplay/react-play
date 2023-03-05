import { AllTimeStats } from './types';

export function createElement(tag: string, classes: string, innerText: string) {
  // Utility function to create an error element
  const newElem = document.createElement(tag);
  const style = classes.split(' ');

  newElem.classList.add(...style);
  newElem.textContent = innerText;

  return newElem;
}

// An utility to asynchronously sleep
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Get wordle data of user from local storage and update accordingly
export function setLocalData(result: 'WIN' | 'LOSS', attempt: number) {
  let allTimeStats: AllTimeStats;

  const value = localStorage.getItem('wordle-game-stats');
  if (!value) {
    allTimeStats = {
      played: 0,
      wins: 0,
      winsByAttempts: [0, 0, 0, 0, 0, 0],
      streak: 0,
      highestStreak: 0,
      lastPlayed: Date.now()
    };
  } else {
    allTimeStats = JSON.parse(value);
  }

  if (result === 'WIN') {
    allTimeStats.wins += 1;
    allTimeStats.winsByAttempts[attempt] += 1;
  }
  allTimeStats.played += 1;

  const twoDays = 60 * 60 * 24 * 2;
  if (Date.now() - allTimeStats.lastPlayed > twoDays) allTimeStats.streak = 0;
  else {
    allTimeStats.streak += 1;
    if (allTimeStats.streak > allTimeStats.highestStreak)
      allTimeStats.highestStreak = allTimeStats.streak;
  }
  allTimeStats.lastPlayed = Date.now();

  localStorage.setItem('wordle-game-stats', JSON.stringify(allTimeStats));

  return allTimeStats;
}
