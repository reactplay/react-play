import PlayHeader from 'common/playlists/PlayHeader';

import './App.css';
import Welcome from './components/welcome';
import Instruction from './components/Instruction';
import List from './components/list';

// WARNING: Do not change the entry componenet name
function EmojiGame(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="emoji-game-app">
          {/* Your Code Starts Here */}
          <div>
            <h1>Play Details - Guess The Emoji Game</h1>
            <p>
              The user will be given a list of emoji to select from. The emojis would be split in 3
              row the user has to pick from the 3 times , now the game will show the Users card
            </p>
          </div>
          <Welcome />
          <div className="emoji-game-app">
            <Instruction />
            <List />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default EmojiGame;
