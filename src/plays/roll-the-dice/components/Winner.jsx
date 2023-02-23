import { useGame } from '../hooks/useGame';
import trophy from '../assets/trophy.png';

const Winner = ({ winner }) => {
  const { playAgain, resetGame } = useGame();

  return (
    <div className="rtd__winner">
      <div className="rtd__winner-cup">
        <img alt="trophy" src={trophy} />
      </div>
      <h2>Congratulations, {winner}</h2>
      <p>{winner === 'Computer' ? 'Computer' : 'You'} have won the game!</p>
      <div className="rtd__winner-buttons">
        <button className="rtd__btn" onClick={playAgain}>
          Play Again
        </button>
        <button className="rtd__btn" onClick={resetGame}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Winner;
