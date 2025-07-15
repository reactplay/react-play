import { useState, useEffect } from 'react';
import { useUserId, useAuthenticated } from '@nhost/react';
import countByProp from 'common/utils/commonUtils';
import { loadCoverImage } from 'common/utils/coverImageUtil';
import PlayCard from './PlayCard';

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
          const img = new Image();
          img.onload = () => {
            setCover(play.cover);
          };
          img.onerror = async () => {
            const image = await loadCoverImage(play.slug);
            setCover(image);
          };
          img.src = play.cover;
        } else {
          const image = await loadCoverImage(play.slug);
          setCover(image);
        }
      } catch (error) {
        console.error(error);
        try {
          const image = await loadCoverImage(play.slug);
          setCover(image);
        } catch (fallbackError) {
          console.error('Failed to load both external and local images:', fallbackError);
        }
      }
    };
    loadCover();
  }, [play]);

  return <PlayCard cover={cover} likeObject={likeObject} play={play} />;
};

export default PlayThumbnail;
