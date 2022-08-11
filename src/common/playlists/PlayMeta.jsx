import { useEffect, useState, Suspense, useCallback } from "react";
import { Helmet } from "react-helmet";
import * as plays from "plays";
import { useParams } from "react-router-dom";
import { submit } from "common/services/request";
import Loader from "common/spinner/spinner";
import { toSanitized, toTitleCaseTrimmed } from "common/services/string";
import { FetchPlaysBySlugAndUser } from "common/services/request/query/fetch-plays";
import { PageNotFound } from "common";
import thumbPlay from "images/thumb-play.png";

function PlayMeta() {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState({});
  const [isError, setIsError] = useState(false);
  let { playname, username } = useParams(); // return the parameter of url
  const [metaImage, setMetaImage] = useState();
  const [localImage, setLocalImage] = useState(thumbPlay);

  /**
   * Fetch local playImage
   */
  const fetchLocalPlayCover = useCallback(async (playObj) => {
    try {
      /**
       * Try to Fetch the local cover image
       */
      const response = await import(`plays/${playObj.slug}/cover.png`);
      setLocalImage(response.default);
    } catch (_error) {
      /**
       * On error set the default image
       */
      setLocalImage(thumbPlay);
    }
  }, []);

  useEffect(() => {
    submit(FetchPlaysBySlugAndUser(decodeURI(playname), decodeURI(username)))
      .then((res) => {
        const play_obj = res[0];
        play_obj.title_name = toTitleCaseTrimmed(play_obj.name);
        setPlay(play_obj);
        setMetaImage(play_obj.cover);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setLoading(false);
      });
  }, [playname, username]);

  useEffect(() => {
    if (play) {
      fetchLocalPlayCover(play);
    }
  }, [play, fetchLocalPlayCover]);

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
        <meta name="description" content={play.description} />
        <meta property="og:title" content={play.name} />
        <meta property="og:description" content={play.description} />
        <meta
          property="og:image"
          content={metaImage ? metaImage : localImage}
          data-react-helmet="true"
        />
        <meta
          property="og:image:secure_url"
          content={metaImage ? metaImage : localImage}
          data-react-helmet="true"
        />
        <meta
          property="og:image:alt"
          content={play.description}
          data-react-helmet="true"
        />
        <meta
          name="twitter:title"
          content={play.name}
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content={play.description}
          data-react-helmet="true"
        />
        <meta
          name="twitter:image"
          content={metaImage ? metaImage : localImage}
          data-react-helmet="true"
        />
      </Helmet>
      <Suspense fallback={<Loader />}>{renderPlayComponent()}</Suspense>
    </>
  );
}

export default PlayMeta;
