import React from "react";
import PlayHeader from "common/playlists/PlayHeader";
import Canvas from "./Canvas/Canvas";
import "./styles.css";

const AudioVisualizer = (props: React.ReactNode) => {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <Canvas />
        </div>
      </div>
    </>
  );
};

export default AudioVisualizer;
