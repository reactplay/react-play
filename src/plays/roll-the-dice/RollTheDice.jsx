import PlayHeader from 'common/playlists/PlayHeader';
import App from './components/App';
import { GameProvider } from './context/diceContext';
import './roll-the-dice.css';

// WARNING: Do not change the entry componenet name
function RollTheDice(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <GameProvider>
            <App play={props} />
          </GameProvider>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RollTheDice;
