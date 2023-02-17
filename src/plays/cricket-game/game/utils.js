// An utility to asynchronously sleep and prevent next line to execute
export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// An utility to determine pluralization
export const plural = (int) => (int > 1 ? 's' : '');

import _shotSound from '../audios/shotSound.mp3';
import _gameTrack from '../audios/gametrackbg.mp3';
import _crowdCheering from '../audios/crowd-cheering.mp3';
import _crowdDisappointed from '../audios/crowd-disappointed.mp3';
import _wicketHit from '../audios/wicketHit.mp3';

// Audio
export const shotSound = new Audio(_shotSound);
export const gameTrack = new Audio(_gameTrack);
export const crowdCheering = new Audio(_crowdCheering);
export const crowdDisappointed = new Audio(_crowdDisappointed);
export const wicketHit = new Audio(_wicketHit);

export const randomChoice = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
