import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import thumbPlay from "images/thumb-play.png";
import Shimmer from "react-shimmer-effect";
import userImage from "images/user.png";
import Like from "common/components/Like/Like";
import { useUserId, useAuthenticated } from "@nhost/react";
import countByProp from "common/utils/countByProp";

const Author = ({ user }) => {
  return (
    <div className='play-author flex items-center gap-2'>
      <img
        className='rounded-full border border-zink-400'
        src={
          user?.avatarUrl
            ? !!user?.avatarUrl.length
              ? user?.avatarUrl
              : userImage
            : userImage
        }
        loading='lazy'
        width='25px'
        height='25px'
        alt='avatar'
      />
      <div className='author-anchor'>{user?.displayName}</div>
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
          console.warn(`Cover image not found for the play ${play.name}`);
          console.info("Setting the default cover image...");

          setCover(thumbPlay);
        });
    }
  }, [play]);


  return (
    <li>
      <Link
        to={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}
      >
        <div className='play-thumb'>
          <Shimmer>
            <img loading='lazy' src={cover} alt='' className='play-thumb-img' />
          </Shimmer>
        </div>
        <div className='play-header'>
          <div className='play-title'>{play.name}</div>
          {play.user && <Author user={play.user} />}
          <div className='play-actions mt-4'>
            <div className="flex flex-row justify-between items-end">
              <Like onLikeClick={null} likeObj={likeObject()} />
              <div className={`language language-${play.language || "js"}`}></div>
            </div>
          </div>
        </div>
        <div className='play-status'>
          <BsPlayCircleFill size='48px' />
          <div className='default'>Play now</div>
          <div className='current'>Playing..</div>
        </div>
      </Link>
    </li>
  );
};

export default PlayThumbnail;
