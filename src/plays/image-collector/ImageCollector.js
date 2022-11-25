import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import './styles.css';

function ImageCollector(props) {
  const [urlInput, setUrlInput] = useState('');
  const [images, setImages] = useState([]);

  function addImage() {
    setImages(images.concat(urlInput));
    setUrlInput('');
  }

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="image-collector-container">
            <div className="input-container">
              <input
                className="input-url"
                placeholder="Enter image url"
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
              />
              <button className="input-button" type="submit" onClick={addImage}>
                Add
              </button>
            </div>

            <div className="image-grid">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div className="image-wrapper">
                    <img alt="grid" className="image" key={index} src={image} />
                  </div>
                ))
              ) : (
                <p className="empty-message">Images will appear once you add them</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCollector;
