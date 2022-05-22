import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import Comment from "common/components/Comment";

const PlayHeaderActions = ({ play }) => {
  console.log(play);
  const [showComment, setShowComment] = useState(false);
  const [commentCount, setCommentCount] = useState('...');
  const giscusApiURL = new URL("https://giscus.app/api/discussions")

  const getCommentCount = () => {
    giscusApiURL.searchParams.append('repo', 'atapas/react-play');
    giscusApiURL.searchParams.append('term', play.path.substr(1));
    fetch(giscusApiURL).then(response => {
      response.json().then(data => {
        setCommentCount(data.discussion ? data.discussion.totalCommentCount : 0);
      }
      )
    })
  }

  getCommentCount();

  return (
    <>
      {
        <button className="action badged" onClick={() => setShowComment(true)}>
          <BiComment className="icon" size="24px" />
          {/*<div className="badge-count">99</div>*/}
          <span className="sr-only">Comments</span>
        </button>
      }
      {play.path && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="action"
          href={`https://github.com/atapas/react-play/tree/main/src${play.path}`}
        >
          <BsGithub className="icon" size="24px" />
          <span className="sr-only">GitHub</span>
        </a>
      )}
      {play.blog && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="action"
          href={play.blog}
        >
          <AiOutlineRead className="icon" size="24px" />
          <span className="sr-only">Blog</span>
        </a>
      )}
      {play.video && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="action"
          href={play.video}
        >
          <IoLogoYoutube className="icon" size="24px" />
          <span className="sr-only">Video</span>
        </a>
      )}
      {showComment && (
        <div className="play-details-comments">
          <div className="comments-header">
            <h3 className="header-title">Comments</h3>
            <button
              className="header-action"
              onClick={() => setShowComment(false)}
            >
              <MdClose size={24} className="icon" />
            </button>
          </div>
          <div className="comments-body">
            <Comment />
          </div>
        </div>
      )}
    </>
  );
};

export default PlayHeaderActions;
