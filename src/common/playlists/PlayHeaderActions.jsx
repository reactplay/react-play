import React, { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

import Comment from 'common/components/Comment';

const PlayHeaderActions = ({play}) => {
  console.log(play);
  const [showComment, setShowComment] = useState(false);

  return(
    <>
      { 
        <button
          className='badged'
          onClick={() => setShowComment(true)}>
            <BiComment className="icon" size="24px" />
            {/*<div className="badge-count">99</div>*/}
            <span className="sr-only">Comments</span>
         </button>
      }
      { play.path && 
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/atapas/react-play/tree/main/src${play.path}`}>
              <BsGithub className="icon" size="24px" />
              <span className="sr-only">GitHub</span>
          </a>
      }
      { play.blog && 
          <a
          target="_blank"
          rel="noopener noreferrer" 
          href={play.blog}>
          <AiOutlineRead className="icon" size="24px" />
          <span className="sr-only">Blog</span>
          </a>
      }
      { play.video && 
          <a
            target="_blank"
            rel="noopener noreferrer" 
            href={play.video}>
              <IoLogoYoutube className="icon" size="24px" />
              <span className="sr-only">Video</span>
          </a>
      }
      { showComment && <Comment /> }
    </>  
  );
};

export default PlayHeaderActions;