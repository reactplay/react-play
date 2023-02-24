import { useEffect, useState } from 'react';
import Game from './Game';
import SelectPlayer from './SelectPlayer';
import Guide from './Guide';
import Winner from './Winner';
import { useGame } from '../hooks/useGame';

const App = ({ play }) => {
  const currentPlayer = play?.user.displayName || 'You';
  const [isGuideShow, setIsGuideShow] = useState(false);
  const { winner, isPlaying, isPlayerReady, resetGame, players, setPlayers } = useGame();

  // Update First player is he/she is logged in
  useEffect(() => {
    const updateName = players.map((player) => {
      if (player.id === 0) {
        return { ...player, name: currentPlayer };
      } else {
        return player;
      }
    });
    setPlayers(updateName);
  }, []);

  return (
    <section className="rtd__game">
      <div className="rtd__wrapper">
        {!isPlaying && !isPlayerReady && (
          <Guide isGuideShow={isGuideShow} setIsGuideShow={setIsGuideShow} />
        )}
        {!isPlayerReady && <SelectPlayer />}
        {isPlayerReady && !winner && <Game />}
        {winner && <Winner resetGame={resetGame} winner={winner} />}
      </div>
    </section>
  );
};

export default App;
