import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import JokeList from './components/jokeList/jokeList';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './styles.css';

// WARNING: Do not change the entry componenet name
function DadJokes(props) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body dad-jokes-play">
          {/* --------------------------------Dad Jokes Container-------------------------------- */}
          <div className={darkTheme ? 'dad-jokes dark' : 'dad-jokes'}>
            {/* --------------------------------Joke List Component-------------------------------- */}
            <JokeList darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            {/* --------------------------------Theme Buttons Container-------------------------------- */}
            <div className="theme-buttons">
              <MdDarkMode className="dark-theme-button" onClick={() => setDarkTheme(true)} />
              <MdLightMode className="light-theme-button" onClick={() => setDarkTheme(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DadJokes;
