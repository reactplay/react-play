
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta-util';
import { useState, useEffect } from 'react';

import PlayHeader from 'common/playlists/PlayHeader';
import './random-meme-generator.css';

function RandomMemeGenerator() {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  // Your Code Start below.

  const [meme, setMeme] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  function getMeme() {
    setIsLoading(true);
    fetch('https://meme-api.herokuapp.com/gimme').then((res) => {
      return res.json();
    }).then((data) => {
      setIsLoading(false)
      if(data.nsfw) {
        getMeme();
      } else {
        console.log(data);
        setMeme((prev) => {
          return data;
        })
      }
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    getMeme();
  }, [])

  function handleClick(e) {
    e.target.classList.contains('generate-btn') && getMeme();
  }

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="meme-generator-title">
            Meme Generator
          </div>

          <div className="meme-container">
            {meme.url === null || meme.url === undefined ? <i className={"fa-solid fa-rotate loading"}></i> : <img className="meme" src={meme.url} alt="meme" />}
          </div>

          <div className="generate">
            <button className="btn generate-btn" onClick={handleClick}>Generate <i className={`fa-solid fa-rotate ${isLoading && 'loading'}`}></i></button>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RandomMemeGenerator;