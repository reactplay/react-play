import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import useGitHub from 'common/hooks/useGitHub';

const Author = ({github}) => {
  const { data, error, isLoading } = useGitHub(github);
  const [name, setName] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.name);
    } else {
      error && setName(github);
    }
  }, [data, error, github]);

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {
        <div className="play-author">by 
          <div className='author-anchor'>{ name }</div>
        </div>
      }
    </>  
  );
};

const PlayThumbnail = ({ play }) => {
  const [cover, setCover] = useState(null);

 useEffect(() => {
    // Set the cover image
    // if it is passed as a meta data
    if (play.cover) {
      setCover(play.cover);
    } else {
      // if it is not passed as a meta data
      // check in the play folder for a cover image
      // with the name cover.png
      const playFolder = play.path.split('/')[2];
      import(`plays/${playFolder}/cover.png`).then(Cover => {
        setCover(Cover.default);
      }).catch(err => {
        // if there is no cover image, set a default image
        console.warn(`Cover image not found for the play ${play.name}`);
        console.info('Setting the default cover image...');

        // TODO:Set the default cover image
      });
    }
    
  }, [play]);

  return (
    <li key={play.id}>
      <Link to={play.path} state={{ id: play.id }}>
        <div className='play-thumb'>
          <img src={cover} alt={play.id} className="play-thumb-img" />
        </div>
        <div className="play-header">
          <div className="play-title">{play.name}</div>
          { play.github && <Author github={play.github} /> }
        </div>
        <div className="play-status">
          <BsPlayCircleFill size="48px" />
          <div className="default">Play now</div>
          <div className="current">Playing..</div>
        </div>
      </Link>
    </li>
  );
};

export default PlayThumbnail;
