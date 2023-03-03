import PlayThumbnail from './PlayThumbnail';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import React, { Fragment, useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'common/spinner/spinner';
import * as all_plays from 'plays';
import useGetPlays from 'common/hooks/useGetPlays';

import './playlist.css';
import { toSanitized } from 'common/services/string';
import DynamicBanner from './DynamicBanner';
import { useLocation } from 'react-router-dom';
import { useSearchContext } from 'common/search/search-context';
import { ParseQuery, QueryDBTranslator } from 'common/search/search-helper';
import { getPlaysByFilter } from 'common/services/plays';

const PlayList = () => {
  const [randomPlay, setRandomPlay] = useState({});
  // const [loading, error, plays] = useGetPlays();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [plays, setPlays] = useState();
  const { setQuery } = useSearchContext();
  const [isFiltered, setIsFiltered] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const getPlays = async () => {
      const parsedQuery = ParseQuery(location.search);
      let translatedQuery;
      if (parsedQuery) {
        translatedQuery = QueryDBTranslator(parsedQuery);
      }
      const res = await getPlaysByFilter(translatedQuery);
      setPlays(res);
      console.log(res);
      if (!translatedQuery) {
        const filteredPlays = res.filter(
          (play) => all_plays[play.component ? play.component : toSanitized(play.title_name)]
        );
        // If the filtered array has at least one item, select a random play from the filtered array
        if (filteredPlays && filteredPlays.length > 0) {
          // generate a random index to select a random play
          const randomIndex = Math.floor(Math.random() * filteredPlays.length);
          setRandomPlay(filteredPlays[randomIndex]);
        }
      } else {
        setIsFiltered(true);
      }
    };
    getPlays();
  }, [location.search]);

  if (loading) {
    return <Loader />;
  }

  if (plays?.length === 0 || error) {
    return (
      <div className="play-not-found">
        <ImageOops className="play-not-found-image" />
        <p className="page-404-lead">Play not found</p>
        {
          location.search ? (<p className="page-404-desc">You migh want to adjust the search criteria or <a href="/plays" className='underline'>clear</a> it.</p>):(<p className="page-404-desc">Something went wrong</p>)
        }
        
      </div>
    );
  }

  return (
    <Fragment>
      {isFiltered ? null : <DynamicBanner randomPlay={randomPlay} />}

      <ol className="list-plays">
        {plays?.map((play, index) => (
          <React.Fragment key={index}>
            {all_plays[play.component ? play.component : toSanitized(play.title_name)] && (
              <PlayThumbnail key={play.id} play={play} />
            )}
          </React.Fragment>
        ))}
      </ol>
    </Fragment>
  );
};

export default PlayList;
