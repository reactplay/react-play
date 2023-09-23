import PlayThumbnail from './PlayThumbnail';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import React, { Fragment, useEffect, useState } from 'react';
import Loader from 'common/spinner/spinner';
import useLocalStorage from 'common/hooks/useLocalStorage';
import playsJson from 'plays/index.json';
import './playlist.css';
import { toSanitized } from 'common/services/string';
import DynamicBanner from './DynamicBanner';
import { useLocation } from 'react-router-dom';
import { ParseQuery, QueryDBTranslator } from 'common/search/search-helper';
import { getPlaysByFilter } from 'common/services/plays';
import { getPlayPath } from 'common/utils/commonUtils';

const PlaysNotFound = (search) => {
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

const all_plays = new Map(Object.entries(playsJson));

const PlayList = () => {
  const [randomPlay, setRandomPlay] = useState({});
  const [loading, setLoading] = useState(true);
  const [plays, setPlays] = useState([]);
  // const [allPlays, setAllPlays] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [nav, setNav] = useState([]);
  const [navigation, setNavigation] = useLocalStorage('plays_navigation', []);
  let location = useLocation();

  function handleNavUpdate(play) {
    const playPath = getPlayPath(all_plays, play);
    setNav((prev) => [...prev, playPath]);
  }

  useEffect(() => {
    const getPlays = async () => {
      setLoading(true);
      const parsedQuery = ParseQuery(location.search);
      let translatedQuery;
      if (parsedQuery) {
        translatedQuery = QueryDBTranslator(parsedQuery);
      }
      if (plays.length === 0) {
        let res = await getPlaysByFilter(translatedQuery);
        if (res) {
          const navArr = [];
          const results = res.reduce((arr, res_play) => {
            // only add play in the json file created with create-react-play

            const playName = res_play?.component
              ? res_play?.component
              : toSanitized(res_play?.title_name ?? res_play?.name);
            if (all_plays.has(`${res_play.slug}/${playName}`)) {
              handleNavUpdate(res_play);
              arr.push(res_play);
              nav.push(getPlayPath(all_plays, res_play));
            }

            return arr;
          }, []);
          setPlays(results);
          const playsPaths = results.map(
            (play) => `/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`
          );
          setNavigation(playsPaths);
        }
        if (translatedQuery) {
          setIsFiltered(true);
        }
      }
      setLoading(false);
    };

    getPlays();
  }, [location.search]);

  const showPlaysList = () => {
    return (
      <Fragment>
        {isFiltered ? null : (
          <DynamicBanner randomPlay={plays[Math.floor(Math.random() * plays.length)]} />
        )}

        <ol className="list-plays">
          {plays?.map((play, index) => (
            <Fragment key={index}>
              <PlayThumbnail
                key={play?.id}
                play={play}
                relativePath={all_plays.get('#playsUpwardPath')}
              />
            </Fragment>
          ))}
        </ol>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {loading && <Loader />}
      {!loading && plays.length === 0 && <PlaysNotFound search={location.search} />}
      {!loading && plays.length && showPlaysList()}
    </Fragment>
  );
};

export default PlayList;
