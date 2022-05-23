import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import PlayThumbnail from "./PlayThumbnail";
import { ReactComponent as ImageOops } from "images/img-oops.svg";
import { Link } from 'react-router-dom';

import "./playlist.css";

const PlayList = () => {
  const plays = useSearchFilter();
  if (plays.length === 0) {
    return (
        <div className="play-not-found">
          <ImageOops className="play-not-found-image" />
          <p className='page-404-lead'>Play not found</p>
          <p className='page-404-desc'>
          Why don't you try anther play name or go back to <Link to="/" className='page-404-link'>home</Link>?
          </p>
        </div>
    );
  }
  return (
    <>
      <ol className="list-plays">
        {plays.map((play, index) => (
          <PlayThumbnail key={play.id} play={play} />
        ))}
      </ol>
    </>
  );
};

export default PlayList;
