import PlayThumbnail from "./PlayThumbnail";
import { ReactComponent as ImageOops } from "images/img-oops.svg";
import React, { Fragment, useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "common/spinner/spinner";
import * as all_plays from "plays";
import { useParams } from "react-router-dom";
import useGetPlays from 'common/hooks/useGetPlays'

import "./playlist.css";

const PlayList = () => {
  const [loading, error, plays, refresh] = useGetPlays();
  const [allPlays, setAllPlays] = useState([])

  let { playid } = useParams(); // return the parameter of url
  useEffect(() => {
    if(plays && plays.length > 1) {
      setAllPlays(plays);
    } else {
      if(!loading) {
        const playsFetchd = refresh()
        setAllPlays(playsFetchd)
      }
    }
  },[playid])
  
  if (loading) {
   return <Loader />;
  }

  if (allPlays?.length === 0) {
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
        {allPlays?.map((play, index) => (
          <React.Fragment key={index}>
          {
            all_plays[play.component] && <PlayThumbnail key={play.id} play={play}/>
          }
          </React.Fragment>
          
        ))}
      </ol>
    </Fragment>
  );
};

export default PlayList;
