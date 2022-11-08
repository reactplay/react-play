import React from 'react'
import Video from "../GameAudio/VideoMusic.mp4"

function VideoMusic(props) {
  return (
    <>
      <div className='invisible'>
        <video width="20" height="40" controls autoPlay="autoplay" loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
export default VideoMusic
