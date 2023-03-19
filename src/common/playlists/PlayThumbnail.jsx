import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import thumbPlay from 'images/thumb-play.png';
import Shimmer from 'react-shimmer-effect';
import userImage from 'images/user.png';
import Like from 'common/components/Like/Like';
import { useUserId, useAuthenticated } from '@nhost/react';
import countByProp from 'common/utils/commonUtils';
import { loadCoverImage } from 'common/utils/coverImageUtil';

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
  const [cover, setCover] = useState(null);
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

  useEffect(() => {
    const loadCover = async () => {
      try {
        if (play.cover) {
          setCover(play.cover);
        } else {
          const image = await loadCoverImage(play.slug);
          setCover(image);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadCover();
  }, [play]);

  return (
    <li>
      <Link to={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}>
        <div className="play-thumb">
          <Shimmer>
            <img alt="" className="play-thumb-img" loading="lazy" src={cover} />
          </Shimmer>
        </div>
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
