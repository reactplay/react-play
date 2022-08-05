import React, { useCallback, useLayoutEffect, useState } from "react";
import { useAuthenticated, useUserId } from "@nhost/react";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Like from "common/components/Like/Like";
import Comment from "common/components/Comment";
import useLikePlays from "common/hooks/useLikePlays";
import { NHOST } from "common/const";
import countByProp from "common/utils/countByProp";

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
  const [likeObj, setLikeObj] = useState({ ...initialLikeObject });
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useAuthenticated();

  const constructLikeData = useCallback(
    (userId) => {
      if (!play_like?.length) return { liked: false, number: 0, interation: false };
      const numberOfLikes = countByProp(play_like, "liked", true);
      console.log("number of likes are", numberOfLikes);
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
          number: pre.number + 1,
          interation: true,
        }));
      } else {
        await unLikePlay({ ...mutationObj, liked: !likeObj.liked });
        setLikeObj((pre) => ({
          liked: !pre.liked,
          number: !pre.liked ? pre.number + 1 : pre.number - 1,
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
        <a target='_blank' rel='noopener noreferrer' className='action' href={play.video}>
          <IoLogoYoutube className='icon' size='24px' />
          <span className='sr-only'>Video</span>
        </a>
      )}
      {showComment && (
        <div className='play-details-comments'>
          <div className='comments-header'>
            <h3 className='header-title'>Comments</h3>
            <button className='header-action' onClick={() => setShowComment(false)}>
              <MdClose size={24} className='icon' />
            </button>
          </div>
          <div className='comments-body'>
            <Comment />
          </div>
        </div>
      )}
    </>
  );
};

export default PlayHeaderActions;
