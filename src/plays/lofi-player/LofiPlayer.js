import { useRef, useState, useEffect } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

import { songsdata } from './songs';
import Player from './player';
import './styles.css';

function LofiPlayer(props) {

  // Your Code Start below.
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  }
  

  return (
    <>

      <div className="play-details">
        <PlayHeader play={props} />
        <div className='lofi-all'>
          <div className='video-bg'>
                <video  autoPlay muted loop>
                  <source src="https://firebasestorage.googleapis.com/v0/b/musicplayer-bc7a2.appspot.com/o/video%2F7btrrd%20(1).mp4?alt=media&token=4a59fcc2-368b-40b4-a486-6cbff3c5c98b" type="video/mp4"/>
                  </video>
        <div className="play-details-body">    
              <div className="App-music">
                <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
                <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
              </div>
              <div>

              </div>
              
        </div>
        
        </div>
        </div>
      </div>
    </>
  );
}

export default LofiPlayer;