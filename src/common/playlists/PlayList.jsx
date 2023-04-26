import PlayThumbnail from './PlayThumbnail';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import React, { Fragment, useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'common/spinner/spinner';
import * as all_plays from 'plays';

import './playlist.css';
import { toSanitized } from 'common/services/string';
import DynamicBanner from './DynamicBanner';
import { useLocation } from 'react-router-dom';
import { ParseQuery, QueryDBTranslator } from 'common/search/search-helper';
import { getPlaysByFilter } from 'common/services/plays';

const PlayNotFound = ({ search = false }) => {
  return (
    <div className="play-not-found">
      <ImageOops className="play-not-found-image" />
      <p className="page-404-lead">Play not found</p>
      {search ? (
        <p className="page-404-desc">
          You migh want to adjust the search criteria or{' '}
          <a className="underline" href="/plays">
            clear
          </a>{' '}
          it.
        </p>
      ) : (
        <p className="page-404-desc">Something went wrong</p>
      )}
    </div>
  );
};

const PlayList = () => {
  const [loading, setLoading] = useState(true);
  const [plays, setPlays] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const getPlays = async () => {
      setLoading(true);

      setIsFiltered(false); // show dynamic banner if cancel a search ( clicked on X);
      const parsedQuery = ParseQuery(location.search);
      let translatedQuery;
      if (parsedQuery) {
        translatedQuery = QueryDBTranslator(parsedQuery);
        if (translatedQuery) {
          setIsFiltered(true);
        }
      }
      const res = await getPlaysByFilter(translatedQuery);
      if (res) {
        const found_plays = [];
        res.forEach((res_play) => {
          if (
            all_plays[res_play.component ? res_play.component : toSanitized(res_play.title_name)]
          ) {
            found_plays.push(res_play);
          }
        });
        setPlays(found_plays);
      }
      setLoading(false);
    };
    getPlays();
  }, [location.search]);

  if (loading) {
    return <Loader />;
  } else {
    if (!plays) {
      return <PlayNotFound search={location.search ? true : false} />;
    }

    return (
      <Fragment>
        {isFiltered ? null : (
          <DynamicBanner randomPlay={plays[Math.floor(Math.random() * plays.length)]} />
        )}

        <ol className="list-plays">
          {plays.map((play, index) => (
            <PlayThumbnail key={`${play.id}${index}`} play={play} />
          ))}
        </ol>
      </Fragment>
    );
  }
};

export default PlayList;
