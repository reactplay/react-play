import React, { Fragment, useEffect, useState } from 'react';
import PlayThumbnail from './PlayThumbnail';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import Loader from 'common/spinner/spinner';
import './playlist.css';
import { useLocation } from 'react-router-dom';
import { fetchPlays } from './FeaturedPlaysFetcher/PlayFetcher';

const FeaturedPlays = () => {
  const [loading, setLoading] = useState(false);
  const [plays, setPlays] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getPlaysData = async () => {
      setLoading(true);
      try {
        const fetchedPlays = await fetchPlays(location.search);
        setPlays(fetchedPlays);
      } catch (error) {
        console.error('Error fetching plays:', error);
      } finally {
        setLoading(false);
      }
    };

    getPlaysData();
  }, [location.search]);

  if (loading) {
    return <Loader />;
  }

  if (plays.length === 0) {
    return (
      <div className="play-not-found">
        <ImageOops className="play-not-found-image" />
        <p className="page-404-lead">Play not found</p>
        {location.search ? (
          <p className="page-404-desc">
            You might want to adjust the search criteria or{' '}
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

  // Sort the plays by number of likes in descending order, and if likes are equal, sort by latest creation
  const sortedPlays = [...plays].sort((playA, playB) => {
    if (playA.play_like.length === playB.play_like.length) {
      return new Date(playB.created_at) - new Date(playA.created_at);
    }

    return playB.play_like.length - playA.play_like.length;
  });

  const topPlays = sortedPlays.slice(0, 4);

  return (
    <Fragment>
      <h2 className="plays-title-primary">
        Trending <strong>Plays</strong>
      </h2>
      <ul className="list-plays">
        {topPlays.map((play, index) => (
          <PlayThumbnail key={index} play={play} />
        ))}
      </ul>
    </Fragment>
  );
};

export default FeaturedPlays;
