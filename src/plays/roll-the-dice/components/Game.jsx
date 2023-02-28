import demoDice from '../assets/5.png';
import Player from './Player';
import { useGame } from '../hooks/useGame';

const Game = () => {
  const { activePlayer, isPlaying, players, startGame, dice, rollTheDice, isComputer } = useGame();

  // Play the game
  return (
    <div
      className={`rtd__roll-the-dice ${
        activePlayer === 0 ? 'rtd__roll-you' : activePlayer === 1 ? 'rtd__roll-opponent' : ''
      }`}
    >
      {!isPlaying && (
        <button className="rtd__btn rtd__btn-start-game" onClick={startGame}>
          Start
        </button>
      )}
      <div className="rtd__players">
        {players.map((player, i) => (
          <Player index={i} key={i} player={player} />
        ))}
      </div>
      <div className="rtd__roll">
        <div className="rtd__roll-dice">
          <img alt="dice-one" src={dice ? dice : demoDice} />
        </div>
        <button
          className="rtd__btn rtd__btn-roll"
          disabled={isComputer ? true : false}
          onClick={rollTheDice}
        >
          {isComputer ? 'Computer Playing' : 'Roll The Dice'}
        </button>
      </div>
    </div>
  );
};

export default Game;
