import React from 'react';
import { useState, useEffect } from 'react';
import GalleryAPI from './GalleryAPI';

export default function Gallery() {
  const data = GalleryAPI;
  const [ourText, setOurText] = useState(
    'Welcome to the Image Gallery, Click on the Images and get to know about it.'
  );
  const midText =
    "Sorry for interrupting. I think you like our Gallery. Don't forget to give it a thumbs up.";
  const msg = new SpeechSynthesisUtterance();
  var voiceName = 'Zira';

  const filterResult = (catItem) => {
    GalleryAPI.filter((currentData) => {
      speechHandler(msg);

      return currentData.type === catItem;
    });
  };
  const speechHandler = (msg) => {
    msg.text = ourText;
    // This for loop help us to give the female voice
    for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
      if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) !== -1) {
        msg.voice = window.speechSynthesis.getVoices()[i];
      }
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  };

  function sayAboutImage() {
    speechHandler(msg);
  }

  useEffect(() => {
    setTimeout(() => {
      setOurText(midText);
    }, 40000);
  }, []);

  setTimeout(() => {
    speechHandler(msg);
  }, 6);

  return (
    <>
      {/* Final Grid */}

      <div className="know-image-heading-gallery">Do You Know the Image?</div>
      <div className="know-image-gallery-image">
        {data.map((values) => {
          const { url, type, discription, title, videoUrl } = values;

          return (
            <>
              <div className="know-image-gallery-img-box" onMouseUp={() => setOurText(discription)}>
                <img
                  alt="galleryImage"
                  className="know-image-gallery-grid-image"
                  src={url}
                  onClick={() => filterResult(type)}
                />
                <video autoPlay loop className="know-image-gallery-video">
                  <source src={videoUrl} />
                </video>

                <div className="know-image-transparent-box">
                  <div className="know-image-caption">
                    <p>{title}</p>
                    <button className="know-image-opacity-low" onClick={sayAboutImage}>
                      Know Me
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <button
          className="know-image-custom-btn know-image-gallery-btn"
          onClick={() =>
            setOurText('More images will add soon, and till then, explore the rest of them.')
          }
        >
          <span>More...</span>
        </button>
      </div>
    </>
  );
}
