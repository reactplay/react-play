import { memo, useEffect, useState, Suspense, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { submit } from 'common/services/request';
import Loader from 'common/spinner/spinner';
import { toSanitized } from 'common/services/string';
import { toTitleCaseTrimmed } from 'common/services/string';
import { FetchPlaysBySlugAndUser } from 'common/services/request/query/fetch-plays';
import { PageNotFound } from 'common';
import thumbPlay from 'images/thumb-play.png';
import { getPlayLink, getProdUrl } from 'common/utils/commonUtils';
import { lazy } from 'react';
import playsJson from 'plays/index.json';
import useLocalStorage from 'common/hooks/useLocalStorage';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

import './play_meta.css';

function PlayMeta() {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState({});
  const [isError, setIsError] = useState(false);
  let { playname, username } = useParams(); // return the parameter of url
  const [metaImage, setMetaImage] = useState();
  const [ogTagImage, setOgTagImage] = useState();
  const [navigation, setNavigation] = useLocalStorage('plays_navigation');
  const [previousPlay, setPreviousPlay] = useState(null);
  const [nextPlay, setNextPlay] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  // const [localImage, setLocalImage] = useState(thumbPlay);

  const all_plays = new Map(Object.entries(playsJson));

  const handleCurrentPosition = (position, total) => {
    setCurrentPosition(`${position} / ${total}`);
  };

  const handlePlayNavigation = (position, type) => {
    const current = navigation[position];
    type === 'prev' ? setPreviousPlay(current) : setNextPlay(current);
  };

  const renderPlayComponent = () => {
    // component can have a totally differnt name compared to the component
    const playName = play?.component
      ? play?.component
      : toSanitized(play?.title_name ?? play?.name);

    if (all_plays.has(`${play.slug}/${playName}`)) {
      const ext = play.language === 'js' ? 'jsx' : 'tsx';

      const element = `${all_plays.get('#playsUpwardPath')}plays/${play.slug}/${playName}`;

      const Comp = lazy(() =>
        import(
          /* @vite-ignore */ `${all_plays.get('#playsUpwardPath')}plays/${
            play.slug
          }/${playName}.${ext}`
        )
      );

      return (
        <Suspense
          fallback={
            <div className="play-details">
              <Loader />
            </div>
          }
        >
          <Comp {...play} />
        </Suspense>
      );
    }

    return <PageNotFound />;
  };

  /**
   * Fetch local playImage
   */
  const processCoverImage = useCallback(async (playObj) => {
    let metaImg = '';
    let ogTagImg = '';
    if (playObj.cover) {
      metaImg = playObj.cover;
      ogTagImg = playObj.cover;
      setMetaImage(metaImg);
      setOgTagImage(ogTagImg);
      setLoading(false);

      return;
    }
    try {
      /**
       * Try to Fetch the local cover image
       */
      const response = await import(/* @vite-ignore */ `../../../plays/${playObj.slug}/cover.png`);

      metaImg = getProdUrl(response.default);
      ogTagImg = getProdUrl(response.default);
      setMetaImage(metaImg);
      setOgTagImage(ogTagImg);
      setLoading(false);
    } catch (_error) {
      /**
       * On error set the default image
       */

      metaImg = thumbPlay;
      ogTagImg = thumbPlay;
      setMetaImage(metaImg);
      setOgTagImage(ogTagImg);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    submit(FetchPlaysBySlugAndUser(decodeURI(playname), decodeURI(username)))
      .then((res) => {
        const play_obj = res[0];
        play_obj.title_name = toTitleCaseTrimmed(play_obj.name);
        setPlay(play_obj);
        processCoverImage(play_obj);
        // setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setLoading(false);

        return { success: false, error: err };
      });
  }, [playname, username]);

  useEffect(() => {
    if (navigation?.length && Object.keys(play).length !== 0) {
      const playLink = getPlayLink(play);
      const currentPos = navigation.indexOf(playLink);
      if (currentPos !== -1) {
        let previous = currentPos === 0 ? navigation.length - 1 : currentPos - 1;
        let next = currentPos === navigation.length - 1 ? 0 : currentPos + 1;
        handlePlayNavigation(previous, 'prev');
        handlePlayNavigation(next, 'next');
        let position = next + 1;
        handleCurrentPosition(position, navigation.length);
      }
    }
  }, [navigation, play]);

  if (loading) {
    return <Loader />;
  }

  if (!loading && (isError || !play)) {
    return <PageNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>ReactPlay - {play.name}</title>
        <meta content={play.description} name="description" />
        <meta content={play.name} property="og:title" />
        <meta content={play.description} property="og:description" />
        <meta content={metaImage} data-react-helmet="true" property="og:image" />
        <meta content={play.description} data-react-helmet="true" property="og:image:alt" />
        <meta content={play.name} data-react-helmet="true" name="twitter:title" />
        <meta content={play.description} data-react-helmet="true" name="twitter:description" />
        <meta content={ogTagImage} data-react-helmet="true" name="twitter:image" />
      </Helmet>
      <Suspense fallback={<Loader />}>
        <>
          {renderPlayComponent()}
          {(previousPlay || nextPlay) && (
            <div className="play-footer meta-link">
              {previousPlay && (
                <Link to={previousPlay}>
                  <MdOutlineNavigateBefore />
                </Link>
              )}
              <>{currentPosition}</>
              {nextPlay && (
                <Link to={nextPlay}>
                  <MdOutlineNavigateNext />
                </Link>
              )}
            </div>
          )}
        </>
      </Suspense>
    </>
  );
}

export default memo(PlayMeta);
