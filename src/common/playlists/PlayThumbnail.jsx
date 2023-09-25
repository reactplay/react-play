import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import userImage from 'images/user.png';
import Like from 'common/components/Like/Like';
import { useUserId, useAuthenticated } from '@nhost/react';
import countByProp from 'common/utils/commonUtils';
import useCoverImage from 'common/hooks/useCoverImage';
import ImageWithFallback from 'common/components/ImageWithFallback';

import './playThumbnail.css';

const Author = ({ user }) => {
  return (
    <div className="play-author flex items-center gap-2">
      <img
        alt="avatar"
        className="rounded-full border border-zink-400"
        height="25px"
        loading="lazy"
        src={user?.avatarUrl ? (user?.avatarUrl.length ? user?.avatarUrl : userImage) : userImage}
        width="25px"
      />
      <div className="author-anchor">{user?.displayName}</div>
    </div>
  );
};

const PlayThumbnail = ({ play }) => {
  const [coverImage, loading, isProvider] = useCoverImage(play);
  const isAuthenticated = useAuthenticated();
  const userId = useUserId();
  const likeObject = () => {
    const { play_like } = play;
    const number = countByProp(play_like, 'liked', true);
    if (isAuthenticated) {
      const liked = play_like.find((i) => i.user_id === userId)?.liked;

      return { liked, number };
    }

    return { liked: false, number };
  };

  const DisplayThumb = () => {
    if (isProvider)
      return <img alt="" className="play-thumb-img" loading="lazy" src={coverImage} />;
    if (!isProvider) {
      return (
        <ImageWithFallback
          isThumbnail
          alt={`${play.playName}`}
          classname="play-thumb-img shimmer media"
          src={coverImage}
        />
      );
    }
  };

  const ThumbHeader = () => {
    return (
      <div className="play-header">
        <div className="play-title">{play.name}</div>
        {play.user && <Author user={play.user} />}
        <div className="play-actions mt-4">
          <div className="flex flex-row justify-between items-end">
            <Like likeObj={likeObject()} onLikeClick={null} />
            <div className={`language language-${play.language || 'js'}`} />
          </div>
        </div>
      </div>
    );
  };

  const ThumbStatus = () => {
    return (
      <div className="play-status">
        <BsPlayCircleFill size="48px" />
        <div className="default">Play now</div>
        <div className="current">Playing..</div>
      </div>
    );
  };

  return (
    <li>
      <Link to={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}>
        <div className={loading ? 'play-thumb loader-shimmer shimmer' : 'play-thumb'}>
          {!loading && coverImage && <DisplayThumb />}
        </div>
        <ThumbHeader />
        <ThumbStatus />
      </Link>
    </li>
  );
};

export default PlayThumbnail;
