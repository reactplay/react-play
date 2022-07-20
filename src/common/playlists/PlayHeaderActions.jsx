import React, { useState } from "react";
import { useAuthenticated } from "@nhost/react";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Like from "common/components/Like/Like";
import SignInMethods from "./SignInMethods";
import Comment from "common/components/Comment";
import { NhostClient } from "@nhost/nhost-js";
import MuiModal from "common/modal/MuiModal";

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});

const PlayHeaderActions = ({ play }) => {
  const [showComment, setShowComment] = useState(false);
  const [showSignInMethods, setShowSignInMethods] = useState(false);
  const [likeObj, setLikeObj] = useState({ like: false, number: 5 });
  const isAuthenticated = useAuthenticated();

  const handleLogin = async (value) => {
    return await nhost.auth.signIn({
      provider: value,
      options: {
        redirectTo: window.location.href,
      },
    });
  };

  const modalHandler = () => {
    if (!isAuthenticated) return setShowSignInMethods(!showSignInMethods);
    return setLikeObj(pre => ({like: !pre.like, number: !pre.like ? 6 : 5}));
  };

  return (
    <>
      <Like onLikeClick={modalHandler} likeObj={likeObj} />
      <button className='action badged' onClick={() => setShowComment(true)}>
        <BiComment className='icon' size='24px' />
        {/*<div className="badge-count">99</div>*/}
        <span className='sr-only'>Comments</span>
      </button>

      {play.path && (
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='action'
          href={`https://github.com/reactplay/react-play/tree/main/src${play.path}`}
        >
          <BsGithub className='icon' size='24px' />
          <span className='sr-only'>GitHub</span>
        </a>
      )}
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='action'
        href={
          play.blog
            ? play.blog
            : `https://github.com/reactplay/react-play/tree/main/src${play.path}/Readme.md`
        }
      >
        <AiOutlineRead className='icon' size='24px' />
        <span className='sr-only'>Blog</span>
      </a>
      {play.video && (
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='action'
          href={play.video}
        >
          <IoLogoYoutube className='icon' size='24px' />
          <span className='sr-only'>Video</span>
        </a>
      )}
      {showComment && (
        <div className='play-details-comments'>
          <div className='comments-header'>
            <h3 className='header-title'>Comments</h3>
            <button
              className='header-action'
              onClick={() => setShowComment(false)}
            >
              <MdClose size={24} className='icon' />
            </button>
          </div>
          <div className='comments-body'>
            <Comment />
          </div>
        </div>
      )}
      <MuiModal
        open={showSignInMethods}
        handleClose={modalHandler}
        component={<SignInMethods loginHandler={handleLogin} />}
      />
    </>
  );
};

export default PlayHeaderActions;
