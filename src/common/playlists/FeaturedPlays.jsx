import React, { Fragment } from 'react';
import PlayThumbnail from './PlayThumbnail';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import Loader from 'common/spinner/spinner';
import './playlist.css';
import { useLocation } from 'react-router-dom';
import useFeaturedPlays from 'common/hooks/useFeaturedPlays';

const FeaturedPlays = () => {
  const location = useLocation();
  const search = location.search;
  const [loading, error, plays] = useFeaturedPlays(search);

  if (loading) {
    return <Loader />;
  }

  if (error || !plays.length) {
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

  const sortedPlays = [...plays].sort((playA, playB) => {
    const likesComparison = playB.play_like.length - playA.play_like.length;
    if (likesComparison === 0) {
      return new Date(playB.created_at) - new Date(playA.created_at);
    }

    return likesComparison;
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
