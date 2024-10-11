import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import './styles.css';

// WARNING: Do not change the entry component name
function RandomAvatar(props) {
  // Your Code Start below.
  const getRandomCharacter = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  };

  const getRandomGender = () => {
    return Math.random() < 0.5 ? 'boy' : 'girl';
  };

  function generateAvatar() {
    const gender = getRandomGender();
    const username = getRandomCharacter();

    return `https://avatar.iran.liara.run/public/${gender}?username=${username}`;
  }

  const [avatarUrl, setAvatarUrl] = useState(generateAvatar());

  const handleClick = () => {
    setAvatarUrl(generateAvatar());
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="avatar-body avatar-selection">
            <div className="avatar-container">
              <main className="avatar">
                <h1 className="fancy-heading">Random Avatar</h1>
                <img alt="Random Avatar" className="avatar-image" src={avatarUrl} />
              </main>
              <div>
                <button
                  aria-label="Re-generate random avatar"
                  className="button-89"
                  onClick={handleClick}
                >
                  Re-Generate
                </button>
              </div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RandomAvatar;
