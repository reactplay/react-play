import { useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import imageCompression from "browser-image-compression";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles.css";

function ImageCompressor(props) {
  // Your Code Start below.

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileSize, setSelectedFileSize] = useState(null);
  const [compressing, setCompressing] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedFileSize, setCompressedFileSize] = useState(null);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return;
    }
    setSelectedFile(imageFile);
    setSelectedFileSize((imageFile.size / 1024 / 1024).toFixed(2));
    setCompressing(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      setCompressedFile(compressedFile);
      setCompressedFileSize((compressedFile.size / 1024 / 1024).toFixed(2));
      setCompressing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="imageCompressor">
            <input
              className="imageCompressor__input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="imageCompressor__imageContainer">
              <div className="imageCompressor__box">
                <div className="imageCompressor__image">
                  {selectedFile && (
                    <img src={URL.createObjectURL(selectedFile)} alt="" />
                  )}
                </div>
                <p>{selectedFileSize} MB</p>
              </div>
              <div className="imageCompressor__progress">
                {compressing && <CircularProgress />}
              </div>
              <div className="imageCompressor__box">
                <div className="imageCompressor__image">
                  {compressedFile && (
                    <img src={URL.createObjectURL(compressedFile)} alt="" />
                  )}
                </div>
                <p>{compressedFileSize} MB</p>
              </div>
            </div>
            {compressedFile && (
              <button className="imageCompressor__btn">
                <a href={URL.createObjectURL(compressedFile)} download>
                  Download
                </a>
              </button>
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ImageCompressor;
