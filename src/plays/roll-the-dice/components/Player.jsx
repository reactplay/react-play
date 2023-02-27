import { useGame } from '../hooks/useGame';

const Player = ({ player: { name, score }, index: i }) => {
  const { activePlayer, isComputer, roundScore, holdScore } = useGame();

  return (
    <div className={`rtd__player ${activePlayer == i ? 'rtd_player-playing' : ''}`}>
      <h4 className="rtd__player-title">{name}</h4>
      <div className="rtd__player-score">
        <h2>{score}</h2>
      </div>

      {activePlayer === i && (
        <div className="rtd__player-round-score">
          <h4>{roundScore}</h4>
          <button
            className="rtd__btn rtd__btn-hold"
            disabled={isComputer ? true : false}
            onClick={() => holdScore(i)}
          >
            Hold
          </button>
        </div>
      )}
    </div>
  );
};

export default Player;
