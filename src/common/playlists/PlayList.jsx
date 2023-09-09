import PlayThumbnail from './PlayThumbnail';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import React, { Fragment, useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'common/spinner/spinner';
import * as all_plays from 'plays';
import { SORT_BY } from 'constants';
import './playlist.css';
import { toSanitized } from 'common/services/string';
import DynamicBanner from './DynamicBanner';
import { useLocation } from 'react-router-dom';
import { ParseQuery, QueryDBTranslator } from 'common/search/search-helper';
import { getPlaysByFilter } from 'common/services/plays';

const PlayList = () => {
  const [randomPlay, setRandomPlay] = useState({});
  const [loading, setLoading] = useState();
  const [plays, setPlays] = useState();
  const [isFiltered, setIsFiltered] = useState(false);
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortByPlay') || 'Newest');
  let location = useLocation();

  const onChange = (e) => {
    const { value } = e.target;
    setSortBy(value);
    localStorage.setItem('sortByPlay', value);
  };

  useEffect(() => {
    const getPlays = async () => {
      setLoading(true);
      const parsedQuery = ParseQuery(location.search);
      let translatedQuery;
      if (parsedQuery) {
        translatedQuery = QueryDBTranslator(parsedQuery);
      }
      const res = await getPlaysByFilter(translatedQuery, sortBy);
      const found_plays = [];
      if (res) {
        res.forEach((res_play) => {
          if (
            all_plays[res_play.component ? res_play.component : toSanitized(res_play.title_name)]
          ) {
            found_plays.push(res_play);
          }
        });
        if (sortBy === 'Random') {
          const random_plays = found_plays.sort(() => Math.random() - 0.5);
          setPlays(random_plays);
        } else {
          setPlays(found_plays);
        }
      }
      if (!translatedQuery) {
        // If the filtered array has at least one item, select a random play from the filtered array
        if (found_plays && found_plays.length > 0) {
          // generate a random index to select a random play
          const randomIndex = Math.floor(Math.random() * found_plays.length);
          setRandomPlay(found_plays[randomIndex]);
        }
      } else {
        setIsFiltered(true);
      }
      setLoading(false);
    };
    getPlays();
  }, [location.search, sortBy]);

  if (loading) {
    return <Loader />;
  }

  if (plays?.length === 0) {
    return (
      <div className="play-not-found">
        <ImageOops className="play-not-found-image" />
        <p className="page-404-lead">Play not found</p>
        {location.search ? (
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
  }

  return (
    <Fragment>
      {isFiltered ? null : <DynamicBanner randomPlay={randomPlay} />}
      <div className="sort-by-plays-wrapper">
        Sort By :
        <select name="sort-by-plays" id="sort-by-plays" value={sortBy} onChange={onChange}>
          {SORT_BY.map((name, i) => (
            <option value={name} key={i}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <ol className="list-plays">
        {plays?.map((play, index) => (
          <React.Fragment key={index}>
            <PlayThumbnail key={play.id} play={play} />
          </React.Fragment>
        ))}
      </ol>
    </Fragment>
  );
};

export default PlayList;
