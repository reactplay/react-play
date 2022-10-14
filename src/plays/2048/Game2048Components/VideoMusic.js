import React from 'react'
import Vid from "../GameAudio/VideoMusic.mp4"

function VideoMusic() {
  return (
    <>
      <div className='invisible'>
        <video width="20" height="40" controls autoPlay="autoplay" loop>
          <source src={Vid} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
export default VideoMusic
