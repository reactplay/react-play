import React, { useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import MEditor from "./components/editor";
import { ScreenCapture } from "react-screen-capture";

function CodeSnippets(props) {
  const [screenCapture, setScreenCapture] = useState();
  const [snippets, setSnippets] = useState("");
  
  const handleScreenCapture = (screenCapture) => {
    setScreenCapture(screenCapture);
  };

  const handleSave = () => {
    const screenCaptureSource = screenCapture;
    const downloadLink = document.createElement("a");
    const fileName = "react-screen-capture.png";

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  function handleEditorChange(value) {
    setSnippets(value);
  }

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <ScreenCapture onEndCapture={handleScreenCapture}>
        {({ onStartCapture }) => (
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-5">
              <MEditor data={snippets} onChange={handleEditorChange} />
            </div>
            <div className="flex flex-col w-full md:w-1/2 p-5">
              <div className="flex mb-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={onStartCapture}
                >
                  Capture Code
                </button>
                <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setScreenCapture()}
              >
                Clear
              </button>
              </div>
              <div>
                {screenCapture && (
                  <img src={screenCapture} alt="react-screen-capture" />
                )}
                <p>
                  {screenCapture && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" onClick={handleSave}>Download</button>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </ScreenCapture>
    </div>
  );
}

export default CodeSnippets;
