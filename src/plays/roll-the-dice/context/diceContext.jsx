import { createContext, useEffect, useState } from 'react';
import { useRandom } from '../hooks/useRandom';
import { randomNumber } from '../utils/randomNumber';

const playerData = [
  {
    id: 0,
    name: 'You',
    score: 0
  },
  {
    id: 1,
    name: null,
    score: 0
  }
];

// Create a new context
export const diceContext = createContext();

export const GameProvider = ({ children }) => {
  const [activePlayer, setActivePlayer] = useState(null);
  const [roundScore, setRoundScore] = useState(0);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [winner, setWinner] = useState(null);
  const [players, setPlayers] = useState(playerData);
  const [pointsToWin, setPointsToWin] = useState(100);

  // Get Random Number as newScore, Random Dice, and the method to get those values
  const { newScore, dice, getRandom } = useRandom();

  // is second player is computer or not
  const isComputer = players[1].name === 'Computer' && activePlayer == 1;

  useEffect(() => {
    if (newScore && newScore === 1) {
      // If you get 1 point (🎲) you will loose your round points and play next player.
      nextPlayer();
    } else {
      setRoundScore((prevRoundScore) => prevRoundScore + newScore);
    }
  }, [newScore]);

  useEffect(() => {
    if (activePlayer === 1 && isComputer) {
      playAuto();
    }
  }, [activePlayer, roundScore]);

  // Update your compitior's details
  function updateSecondPlayer(name) {
    const secondPlayer = players.map((player) => {
      if (player.id === 1) {
        return { ...player, name: name };
      } else {
        return player;
      }
    });
    setPlayers(secondPlayer);
    setIsPlayerReady(true);
  }

  // Start the game
  function startGame() {
    if (!isPlaying) {
      setActivePlayer(randomNumber(0, 1));
      setIsPlaying(true);
    }
  }

  // Roll the dice
  const rollTheDice = () => {
    if (isPlaying) {
      getRandom();
    }
  };

  // Hold points and update the main score
  function holdScore(playerNumber) {
    const increaseScore = players.map((player, i) => {
      if (playerNumber === i) {
        if (player.score + roundScore >= pointsToWin) {
          winTheGame(i);

          return { ...player, score: player.score + roundScore };
        } else {
          return { ...player, score: player.score + roundScore };
        }
      } else {
        return player;
      }
    });

    setPlayers(increaseScore);
    // And play the next player
    nextPlayer();
  }

  // If the computer is a player the game will paly automatically
  function playAuto() {
    let interval;
    // .5s delay to wait for next roll
    interval = setTimeout(() => {
      getRandom();
    }, 500);

    // Hold the round score
    if (roundScore >= 13 || roundScore + players[1].score >= pointsToWin) {
      holdScore(1);
      clearTimeout(interval);
    }
  }

  // Set winner
  function winTheGame(winner) {
    const winnerName = players[winner].name;
    setWinner(winnerName);
    setIsPlaying(false);
    setActivePlayer(null);
  }

  // Next player
  function nextPlayer() {
    setActivePlayer((prevPlayer) => {
      if (prevPlayer === 0) return 1;

      return 0;
    });

    setRoundScore(0);
  }

  // Restart game
  function playAgain() {
    setWinner(null);
    setIsPlaying(true);
    setActivePlayer(randomNumber(0, 1));
    setRoundScore(0);
    const resetScore = players.map((player) => {
      return { ...player, score: 0 };
    });
    setPlayers(resetScore);
  }

  // Reset the game
  function resetGame() {
    setRoundScore(0);
    setActivePlayer(null);
    setIsPlaying(false);
    updateSecondPlayer(null);
    setIsPlayerReady(false);
    setWinner(null);
    setPointsToWin(100);
    const resetScore = players.map((player) => {
      if (player.id === 1) {
        return { ...player, name: null, score: 0 };
      }

      return { ...player, score: 0 };
    });
    setPlayers(resetScore);
  }

  return (
    <diceContext.Provider
      value={{
        firstPlayer: players[0],
        secondPlayer: players[1],
        activePlayer,
        roundScore,
        isPlaying,
        winner,
        players,
        dice,
        isComputer,
        isPlayerReady,
        setPlayers,
        setPointsToWin,
        updateSecondPlayer,
        startGame,
        rollTheDice,
        holdScore,
        playAgain,
        resetGame
      }}
    >
      {children}
    </diceContext.Provider>
  );
};
