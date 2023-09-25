import React, { Fragment, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';

import useCoverImage from 'common/hooks/useCoverImage';
const DynamicBanner = ({ randomPlay }) => {
  const [coverImage, loadingCoverImage, isProvider] = useCoverImage(randomPlay);

  return (
    <Fragment>
      <div
        className="dynamic-banner-container"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), #020808),url(${coverImage} ) center/cover no-repeat`,
          minHeight: '50vh'
        }}
      >
        <div className="dynamic-banner-body md:pl-14 px-4 py-2 md:py-3">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">{randomPlay.name}</h1>
          <p className="text-gray-400 mt-2 text-xs md:text-base ">{randomPlay.description}</p>
          <Link to={`/plays/${encodeURI(randomPlay?.github?.toLowerCase())}/${randomPlay.slug}`}>
            <button className="banner-button rounded-full font-extrabold uppercase px-8 md:px-12 md:py-1">
              Let's Play <MdArrowRightAlt className="right-arrow-icon" size={40} />
            </button>
          </Link>

          {/* <Link to={``}><button className='banner-button'>See Creator's profile</button></Link> */}
        </div>
      </div>
    </Fragment>
  );
};

export default DynamicBanner;
