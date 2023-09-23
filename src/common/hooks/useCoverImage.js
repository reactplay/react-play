import { useState, useCallback, useEffect } from 'react';
import { loadCoverImage } from 'common/utils/coverImageUtil';
import { toSanitized } from 'common/services/string';
import playsJson from 'plays/index.json';
const all_plays = new Map(Object.entries(playsJson));

const useCoverImage = (play) => {
  const [coverImage, setCoverImage] = useState(null);
  const [loadingCover, setLoadingCover] = useState(true);

  const loadCover = useCallback(async () => {
    setLoadingCover(true);
    // Todo
    const playName = play?.component
      ? play?.component
      : toSanitized(play?.title_name ?? play?.name);
    let coverInfo = all_plays.get(`${play.slug}/${playName}`)[1];
    if (!coverInfo) {
      coverInfo = 'images/thumb-play.png';
    }
    if (coverInfo === 'images/thumb-play.png') {
      setCoverImage(coverInfo);
    } else {
      setCoverImage(await loadCoverImage(play.slug, coverInfo));
    }
    setTimeout(() => setLoadingCover(false), 1);
  }, [play.cover]);

  useEffect(() => {
    loadCover(play);
  }, [play]);

  return [coverImage, loadingCover];
};

export default useCoverImage;
