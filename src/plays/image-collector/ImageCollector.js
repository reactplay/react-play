import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import "./styles.css";

function ImageCollector(props) {
  const [urlInput, setUrlInput] = useState("");
  const [images, setImages] = useState([]);
  // const images = useRef([]);

  function addImage() {
    setImages(images.concat(urlInput));
    setUrlInput("");
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
                type="url"
                placeholder="Enter image url"
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
                  <img className="image" src={image} alt="grid" key={index} />
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
