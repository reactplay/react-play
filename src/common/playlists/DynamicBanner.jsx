import React, { Fragment, useEffect, useState } from 'react';
import thumbPlay from 'images/thumb-play.png';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';

const DynamicBanner = ({ randomPlay }) => {
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    if (randomPlay && randomPlay.cover) {
      setCoverImage(randomPlay.cover);
    } else {
      import(`plays/${randomPlay.slug}/cover.png`)
        .then((Cover) => {
          setCoverImage(Cover.default);
        })
        .catch((err) => {
          setCoverImage(thumbPlay);

          return {
            success: false,
            error: err,
            message: `Cover image not found for the play ${randomPlay.name}. Setting the default cover image...`
          };
        });
    }
  }, [randomPlay]);

  return (
    <Fragment>
      <div
        className="dynamic-banner-container"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), #020808),url(${coverImage} ) center no-repeat`,
          minHeight: '70vh'
        }}
      >
        <div className="dynamic-banner-body">
          <h1 className="text-white text-3xl md:text-5xl">{randomPlay.name}</h1>
          <p className="text-gray-400 mt-2 text-xs md:text-base truncate">
            {randomPlay.description}
          </p>
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
