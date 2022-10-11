import React, { useRef } from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const handlePlayPause = ()=> setIsPlaying(!isPlaying);

  const checkWidth = (e)=>
  {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const handleSkipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const handleSkipToNext = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  return (
    <div className='player_container'>
      <div className="title">
        <p>{currentSong.title}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill className='btn_action' onClick={handleSkipBack}/>
        {isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={handlePlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={handlePlayPause}/>}
        <BsFillSkipEndCircleFill className='btn_action' onClick={handleSkipToNext}/>        
      </div>
    </div>
  
  )
}

export default Player