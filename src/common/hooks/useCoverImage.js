import { useState, useCallback, useEffect } from 'react';
import { loadCoverImage } from 'common/utils/coverImageUtil';
import { toSanitized } from 'common/services/string';
import playsJson from 'plays/index.json';
const all_plays = new Map(Object.entries(playsJson));

const useCoverImage = (play) => {
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(null);
  let isProvider = false;

  const loadCover = useCallback(async () => {
    setLoading(true);
    isProvider = false;
    // Todo
    const playName = play?.component
      ? play?.component
      : toSanitized(play?.title_name ?? play?.name);

    // we are using relative import if we don't have an extension to look into
    if (play.coverExt) {
      setCoverImage(`plays/${play.slug}/cover.*${play.coverExt}`);
    } else {
      // look for a cover image in the folder if we already have one
      let upPath = all_plays.get('#playsUpwardPath');
      const image = await loadCoverImage(upPath, `${play.slug}`);
      if (image !== null) {
        setCoverImage(image);
        setLoading(false);
      } else if (play.cover) {
        isProvider = true;
        setCoverImage(play.cover);
        setLoading(false);
      } else {
        setCoverImage('images/thumb-play.png');
        setLoading(false);
      }
    }
    setTimeout(() => setLoading(false));
  }, [play.cover]);

  useEffect(() => {
    loadCover(play);
  }, [play]);

  return [coverImage, loading, isProvider];
};

export default useCoverImage;
