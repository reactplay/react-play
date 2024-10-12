import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import PlayShare from './PlayShare.jsx';

import Shimmer from 'react-shimmer-effect';
import Like from 'common/components/Like/Like';
import userImage from 'images/user.png';

function PlayCard({ play, cover, likeObject }) {
  return (
    <Link to={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}>
      <div className="play-card-container">
        <div className="play-thumb-container">
          <Shimmer>
            <img alt="" className="play-card-thumb-img" src={cover} />
          </Shimmer>
          <BsPlayCircleFill className="play-icon" color="white" size={80} />
        </div>

        {/* <div className="border" /> */}
        <div className="card-header">{play.name}</div>
        {play.user && (
          <div className="author">
            <img
              alt="avatar"
              className="rounded-full border border-zink"
              height="25px"
              loading="lazy"
              src={
                play?.user.avatarUrl
                  ? play?.user.avatarUrl.length
                    ? play?.user.avatarUrl
                    : userImage
                  : userImage
              }
              width="25px"
            />
            <div className="author-name">{play?.user.displayName}</div>
          </div>
        )}
        <div className="play-actions mt-4">
          <div className="like-container">
            <Like likeObj={likeObject()} onLikeClick={null} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PlayShare
                cover={cover}
                link={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}
              />
              {play.language === 'ts' ? (
                <BiLogoTypescript className="lang-icon" color="#007acc" size={25} />
              ) : (
                <BiLogoJavascript className="lang-icon" color="#F0DB4F" size={25} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlayCard;
