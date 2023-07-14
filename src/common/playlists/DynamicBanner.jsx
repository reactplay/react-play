import React, { Fragment, useEffect, useState } from 'react';
import thumbPlay from 'images/thumb-play.png';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';
import { loadCoverImage } from 'common/utils/coverImageUtil';
const DynamicBanner = ({ randomPlay }) => {
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    async function setPlayCover() {
      if (randomPlay && randomPlay.cover) {
        setCoverImage(randomPlay.cover);
      } else {
        // if it is not passed as a meta data
        // check in the play folder for a cover image with the name cover
        const coverImage = await loadCoverImage(randomPlay.slug);
        if (coverImage) {
          setCoverImage(coverImage);
        } else {
          setCoverImage(thumbPlay);
          console.error(
            `Cover image not found for the play ${randomPlay.name}. Setting the default cover image...`
          );
        }
      }
    }
    setPlayCover();
  }, [randomPlay]);

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
