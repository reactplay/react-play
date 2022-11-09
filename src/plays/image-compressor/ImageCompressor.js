import { useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import imageCompression from "browser-image-compression";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles.css";
import { createObjectURL, getImageSize } from "./Util";

function ImageCompressor(props) {
  // Your Code Start below.

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileSize, setSelectedFileSize] = useState(null);
  const [isCompressing, setCompressing] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedFileSize, setCompressedFileSize] = useState(null);
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return;
    }
    setSelectedFile(imageFile);
    setSelectedFileSize(getImageSize(imageFile));
    setCompressing(true);
    try {
      const compressedFile = await imageCompression(imageFile, options);
      setCompressedFile(compressedFile);
      setCompressedFileSize(getImageSize(compressedFile));
      setCompressing(false);
    } catch (error) {
      alert("Please try again!");
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="image-compressor">
            <input
              className="image-compressor__input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="image-compressor__imageContainer">
              <div className="image-compressor__box">
                <div className="image-compressor__image">
                  {selectedFile && (
                    <img
                      src={createObjectURL(selectedFile)}
                      alt="Original Image"
                    />
                  )}
                </div>
                <p>{selectedFileSize} MB</p>
              </div>
              <div className="image-compressor__progress">
                {isCompressing && <CircularProgress />}
              </div>
              <div className="image-compressor__box">
                <div className="image-compressor__image">
                  {compressedFile && (
                    <img
                      src={createObjectURL(compressedFile)}
                      alt="Compressed Image"
                    />
                  )}
                </div>
                <p>{compressedFileSize} MB</p>
              </div>
            </div>
            {compressedFile && (
              <button className="image-compressor__btn">
                <a href={createObjectURL(compressedFile)} download>
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
