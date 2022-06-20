import PlayThumbnail from "./PlayThumbnail";
import { ReactComponent as ImageOops } from "images/img-oops.svg";
import { Fragment } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "common/spinner/spinner";

import "./playlist.css";

const PlayList = ({ plays, loading }) => {
  if (loading) {
   return <Loader />;
  }

  if (plays?.length === 0) {
    return (
      <div className='play-not-found'>
        <ImageOops className='play-not-found-image' />
        <p className='page-404-lead'>Play not found</p>
        <p className='page-404-desc'>
          Please change your search or adjust filters to find plays.
        </p>
      </div>
    );
  }
  return (
    <Fragment>
      <ol className='list-plays'>
        {plays?.map((play, index) => (
          <PlayThumbnail key={play.id} play={play} />
        ))}
      </ol>
    </Fragment>
  );
};

export default PlayList;
