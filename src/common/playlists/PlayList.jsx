import PlayThumbnail from "./PlayThumbnail";
import { ReactComponent as ImageOops } from "images/img-oops.svg";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { SearchContext } from "common/search/search-context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "common/spinner/spinner";
import * as all_plays from "plays";
import { useParams } from "react-router-dom";
import useGetPlays from 'common/hooks/useGetPlays'

import "./playlist.css";
import { toSanitized } from "common/services/string";

const PlayList = () => {
  const [loading, error, plays] = useGetPlays();
  const [allPlays, setAllPlays] = useState([])

  const { searchTerm, filterQuery } = useContext(SearchContext);
  
  const hasFilterQuery =
    filterQuery.level_id.length > 0 ||
    filterQuery.tags.length > 0 ||
    filterQuery.owner_user_id.length > 0 ||
    filterQuery.language.length > 0;

    let { playid } = useParams(); // return the parameter of url
  
  if (loading) {
   return <Loader />;
  }

  if (plays?.length === 0) {
    return (
      <div className='play-not-found'>
        <ImageOops className='play-not-found-image' />  
        <p className='page-404-lead'>Play not found 
        {hasFilterQuery? " for matched filter criteria" : null}
        {searchTerm ? " for " + searchTerm : null}
        </p>
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
          
          <React.Fragment key={index}>
          {
            all_plays[play.component ? play.component : toSanitized(play.title_name)] && <PlayThumbnail key={play.id} play={play}/>
          }
          </React.Fragment>
          
        ))}
      </ol>
    </Fragment>
  );
};

export default PlayList;
