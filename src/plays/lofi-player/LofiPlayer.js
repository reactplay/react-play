import { useRef, useState, useEffect } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

import { SONGS_DATA } from './songs';
import Player from './player';
import './styles.css';

function LofiPlayer(props) {

  // Your Code Start below.
  const [songs, setSongs] = useState(SONGS_DATA);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(SONGS_DATA[1]);
  const handlePlayState = (value) => setIsPlaying(value);

  const audioElem = useRef();
  const vidLink= "https://firebasestorage.googleapis.com/v0/b/musicplayer-bc7a2.appspot.com/o/video%2F7btrrd%20(1).mp4?alt=media&token=4a59fcc2-368b-40b4-a486-6cbff3c5c98b";

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isPlaying])

  const handleOnPlay = () => {
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
                  <source src={vidLink} type="video/mp4"/>
                  </video>
        <div className="play-details-body">    
              <div className="app-music">
                <audio src={currentSong.url} ref={audioElem} onTimeUpdate={handleOnPlay} />
                <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={handlePlayState} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
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