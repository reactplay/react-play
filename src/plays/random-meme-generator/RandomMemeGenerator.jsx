import { getPlayById } from 'meta/play-meta-util';
import { useState, useEffect, useCallback } from 'react';
import { FaSyncAlt } from 'react-icons/fa';

import PlayHeader from 'common/playlists/PlayHeader';
import './random-meme-generator.css';

function RandomMemeGenerator(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  const [meme, setMeme] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const getMeme = useCallback(() => {
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
  }, [])

  useEffect(() => {
    getMeme();
  }, [getMeme])

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
            {meme.url === null || meme.url === undefined ? <FaSyncAlt className={"loading"}></FaSyncAlt> : <img className="meme" src={meme.url} alt="meme" />}
          </div>

          <div className="generate-meme">
            <button className="btn generate-btn" onClick={() => getMeme()}>Generate <FaSyncAlt className={`${isLoading && 'loading'}`}></FaSyncAlt></button>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RandomMemeGenerator;