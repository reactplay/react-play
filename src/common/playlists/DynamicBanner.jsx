/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { toSanitized } from 'common/services/string';
import React, { Fragment, useEffect, useState } from 'react';
import thumbPlay from 'images/thumb-play.png';
import { Link } from 'react-router-dom';

const DynamicBanner = ({ randomPlay }) => {
  const [cover, setCover] = useState(null);
  console.log(cover);
  console.log(randomPlay);

  useEffect(() => {
   console.log(randomPlay)
    if (randomPlay && randomPlay.cover) {
      setCover(randomPlay.cover);
    } else {
      import(`plays/${randomPlay.slug}/cover.png`)
        .then((Cover) => {
          setCover(Cover.default);
        })
        .catch((err) => {
          setCover(thumbPlay);

          return {
            success: false,
            error: err,
            message: `Cover image not found for the play ${randomPlay.name}. Setting the default cover image...`
          };
        })
    }
  }, [randomPlay]);



  return (
    <Fragment>
      {(randomPlay?.component ? randomPlay.component : toSanitized(randomPlay?.title_name)) && (
        <div
          className="dynamic-banner-container"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5), #020808),url(${cover} )`,
            backgroundSize: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '70vh'
          }}
        >
          <div className="dynamic-banner-body">
            <h1 className="text-white">{randomPlay.name}</h1>
            <p className='text-gray-400 mt-2'>{randomPlay.description}</p>
            <Link to={`/plays/${encodeURI(randomPlay.github.toLowerCase())}/${randomPlay.slug}`}>
            <button className='banner-button'>Let's Play</button>
            </Link>
           
            {/* <Link to={``}><button className='banner-button'>See Creator's profile</button></Link> */}
            
          </div>
          
        </div>
      )}
    </Fragment>
  );
};

export default DynamicBanner;
