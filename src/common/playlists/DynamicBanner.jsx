import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';
import { loadCoverImage } from 'common/utils/coverImageUtil';

const DynamicBanner = ({ randomPlay = null }) => {
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCoverImage = (imgCover, loaded) => {
    setCoverImage(imgCover);
    setLoading(loaded);
  };

  async function setPlayCover() {
    let cover = null;
    if (randomPlay?.cover) {
      handleCoverImage(randomPlay.cover, false);
    } else {
      // if it is not passed as a meta data
      // check in the play folder for a cover image with the name cover
      await loadCoverImage(`${randomPlay.slug}`).then((cover) => {
        handleCoverImage(cover, false);
      });
    }
  }

  useEffect(() => {
    setLoading(true);
    setPlayCover();
  }, []);

    return (
      <Fragment>
        <div
          className="dynamic-banner-container"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5), #020808),url(${coverImage} ) center/cover no-repeat`,
            minHeight: '50vh'
          }}
        >
          {loading && <p>loading...</p> }
          {!loading &&
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
          }
        </div>
      </Fragment>
    );
};

export default DynamicBanner;
