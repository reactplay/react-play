import React from 'react';
import Video from '../GameAudio/VideoMusic.mp4';

function VideoMusic() {
  return (
    <>
      <div className="invisible">
        <video controls loop autoPlay="autoplay" height="40" width="20">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default VideoMusic;
