import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import thumbPlay from 'images/thumb-play.png';
import Shimmer from 'react-shimmer-effect';
import userImage from 'images/user.png';
import Like from 'common/components/Like/Like';
import { useUserId, useAuthenticated } from '@nhost/react';
import countByProp from 'common/utils/commonUtils';

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
    // Set the cover image
    // if it is passed as a meta data
    if (play.cover) {
      setCover(play.cover);
    } else {
      // if it is not passed as a meta data
      // check in the play folder for a cover image
      // with the name cover.png
      import(`plays/${play.slug}/cover.png`)
        .then((Cover) => {
          setCover(Cover.default);
        })
        .catch((err) => {
          // if there is no cover image, set a default image
          setCover(thumbPlay);

          return {
            success: false,
            error: err,
            message: `Cover image not found for the play ${play.name}. Setting the default cover image...`
          };
        });
    }
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
