import PlayHeader from 'common/playlists/PlayHeader';
import { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './styles.css';

// WARNING: Do not change the entry componenet name
function Randombackgroundgenerator(props) {
  // Shabbir's Code Start below.
  const [amount, setAmount] = useState(90);
  const [circle, setCircle] = useState(true);
  const [content, setContent] = useState(' ');
  const blocks = [...Array(amount + 1).keys()].slice(1);

  const animate = () => {
    // using built in animejs function
    anime({
      targets: '.block',
      translateX: () => anime.random(-900, 900),
      translateY: () => anime.random(-500, 300),
      scale: () => anime.random(1, 3)
    });
  };

  const shapeChange = () => {
    setCircle(!circle);
  };

  useEffect(() => {
    animate();
  });
  // Shabbir's code end here

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Shabbir's Code Starts Here */}
          <div className="appContainer">
            <div className={`container ${circle === true ? 'circle' : ''}`}>
              <button onClick={animate}>Generate</button>
              <button onClick={shapeChange}>Circle | Square</button>
              <input
                className="setValue"
                placeholder="Type something..."
                type="text"
                onBlur={(event) => setContent(event?.target.value)}
              />
              {blocks?.map((id) => (
                <div className="block" id={`#${id}`}>
                  {content && content}
                </div>
              ))}
            </div>
          </div>
          {/* Shabbir's Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Randombackgroundgenerator;
