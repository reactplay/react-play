import React from 'react';

const PlayLinks = ({play}) => {
  console.log(play);

  return(
    <ul className="play-links">
      { play.path && <li><a href={`https://github.com/atapas/react-play/tree/main/src${play.path}`}>GitHub</a></li> }
      { play.blog && <li><a href={play.blog}>Blog</a></li> }
      { play.video && <li><a href={play.video}>Video</a></li> }
    </ul>  
  );
};

export default React.memo(PlayLinks);