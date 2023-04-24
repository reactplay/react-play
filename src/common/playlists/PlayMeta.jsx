import { useEffect, useState, Suspense, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import * as plays from 'plays';
import { useParams } from 'react-router-dom';
import { submit } from 'common/services/request';
import Loader from 'common/spinner/spinner';
import { toSanitized, toTitleCaseTrimmed } from 'common/services/string';
import { FetchPlaysBySlugAndUser } from 'common/services/request/query/fetch-plays';
import { PageNotFound } from 'common';
import thumbPlay from 'images/thumb-play.png';
import { getProdUrl } from 'common/utils/commonUtils';
import { loadCoverImage } from 'common/utils/coverImageUtil';

function PlayMeta() {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState({});
  const [isError, setIsError] = useState(false);
  let { playname, username } = useParams(); // return the parameter of url
  const [metaImage, setMetaImage] = useState();
  const [ogTagImage, setOgTagImage] = useState();
  // const [localImage, setLocalImage] = useState(thumbPlay);

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
    // if it is not passed as a meta data
    // check in the play folder for a cover image

    try {
      const coverImage = await loadCoverImage(playObj.slug);
      metaImg = getProdUrl(coverImage);
      ogTagImg = getProdUrl(coverImage);
      setMetaImage(metaImg);
      setOgTagImage(ogTagImg);
      setLoading(false);
    } catch (error) {
      console.error(
        `Cover image not found for the play ${playObj.name}. Setting the default cover image...`
      );
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

  if (loading) {
    return <Loader />;
  }
  if (isError || !play) {
    return <PageNotFound />;
  }

  const renderPlayComponent = () => {
    const Comp = plays[play.component || toSanitized(play.title_name)];

    return <Comp {...play} />;
  };

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
      <Suspense fallback={<Loader />}>{renderPlayComponent()}</Suspense>
    </>
  );
}

export default PlayMeta;
