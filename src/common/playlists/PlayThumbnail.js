import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";

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
        <img src={cover} alt={play.id} />
        <div className="play-title">{play.name}</div>
        <div className="play-status">
          <BsPlayCircleFill size="18px" color="var(--color-neutral-80)" />
          <div className="default">Play now</div>
          <div className="current">Playing..</div>
        </div>
      </Link>
    </li>
  );
};

export default PlayThumbnail;
