import React, { useCallback, useLayoutEffect, useState } from "react";
import { useAuthenticated, useUserId } from "@nhost/react";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Like from "common/components/Like/Like";
import SignInMethods from "./SignInMethods";
import Comment from "common/components/Comment";
import MuiModal from "common/modal/MuiModal";
import useLikePlays from "common/hooks/useLikePlays";
import { NHOST } from "common/const";

// we cannot remove delete SignInMethods, MuiModal file since in future we will support
// more authentication provider. so let us keep it.


// we are not getting latest play_like object after liking or updating liking a play
// thats y we need to track interations of the user
const initialLikeObject = {
  liked: false,
  number: null,
  interation: false,
};

const PlayHeaderActions = ({ play }) => {
  const { play_like } = play;
  const userId = useUserId();

  const { likePlay, unLikePlay } = useLikePlays();

  const [showComment, setShowComment] = useState(false);
  // const [showSignInMethods, setShowSignInMethods] = useState(false);
  const [likeObj, setLikeObj] = useState({ ...initialLikeObject });
  const [loading, setLoading] = useState(false);
  // Other Hooks
  const isAuthenticated = useAuthenticated();

  const countLike = (playLike) => playLike.reduce((a, b) => b?.liked ? ++a : a, 0);

  const constructLikeData = useCallback(
    (userId) => {
      if (!play_like?.length) return { liked: false, number: 0, interation: false };
      const numberOfLikes = countLike(play_like);
      const ifLiked = play_like.find((obj) => obj.user_id === userId);
      return ifLiked
        ? ifLiked?.liked
          ? { liked: true, number: numberOfLikes, interation: true }
          : { liked: false, number: numberOfLikes, interation: true }
        : { liked: false, number: numberOfLikes, interation: false };
    },
    [play_like]
  );

  useLayoutEffect(() => {
    setLikeObj(constructLikeData(userId));
  }, [userId, constructLikeData]);

  const handleLogin = (value) => {
    return (window.location = NHOST.AUTH_URL(window.location.href, value));
  };

  const onLikeClick = async () => {
    if (!isAuthenticated) return handleLogin("github");
    try {
      setLoading(true);
      const mutationObj = { play_id: play.id, user_id: userId };

      if (!likeObj.liked && !likeObj.interation) {
        await likePlay(mutationObj);
        setLikeObj((pre) => ({
          liked: true,
          number: ++pre.number,
          interation: true,
        }));
      } else {
        await unLikePlay({ ...mutationObj, liked: !likeObj.liked });
        setLikeObj((pre) => ({
          liked: !pre.liked,
          number: !pre.liked ? ++pre.number : --pre.number,
          interation: true,
        }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      return setLoading(false);
    }
  };

  return (
    <>
      <Like onLikeClick={!loading ? onLikeClick : null} likeObj={likeObj} />
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
      {/* <MuiModal
        open={showSignInMethods}
        handleClose={onLikeClick}
        component={<SignInMethods loginHandler={handleLogin} />}
      /> */}
    </>
  );
};

export default PlayHeaderActions;
