import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Meme() {
  const [memesData, setMemesData] = useState([]);
  const [error, setError] = useState(null);

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  useEffect(() => {
    const fetchMemes = async () => {
      try{
        const response = await axios.get('https://api.imgflip.com/get_memes');
        setMemesData(response.data.data.memes);
      }catch(error){
        setError(error);
      }
    };
    fetchMemes();
  }, []);

  function getNewUrl() {
    const memesArray = memesData;
    let randomIndex = Math.floor(Math.random() * memesArray.length);
    let newUrl = memesArray[randomIndex].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: newUrl
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <div className="cmg-meme-main">
      <div className="cmg-meme-main-form">
        <div className="cmg-meme-main-form-input-div">
          <input
            className="cmg-meme-main-form-input"
            name="topText"
            placeholder="Top Text"
            type="text"
            value={meme.topText}
            onChange={handleChange}
          />

          <input
            className="cmg-meme-main-form-input"
            name="bottomText"
            placeholder="Bottom Text"
            type="text"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="cmg-meme-main-form-button" onClick={getNewUrl}>
          Generate a new meme image 🖼
        </button>

        {
          error && <p className='cmg-meme-main-error'>{error.message}</p>
        }

      </div>

      <div className="cmg-meme-main-image-container">
        <img className="cmg-meme-main-image" src={meme.randomImage} alt='meme_image'/>
        <h2 className="cmg-meme-main-memeText cmg-meme-main-memeText-top">{meme.topText}</h2>
        <h2 className="cmg-meme-main-memeText cmg-meme-main-memeText-bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
