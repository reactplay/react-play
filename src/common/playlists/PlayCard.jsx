import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import PlayShare from './PlayShare.jsx';
import Like from 'common/components/Like/Like';
import userImage from 'images/user.png';

function PlayCard({ play, cover, likeObject }) {
  return (
    <Link to={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}>
      <div className="glass-card max-w-sm overflow-hidden">
        
        {/* Thumbnail */}
        <div className="relative group">
          <img
            src={cover}
            alt={play.name}
            className="min-w-full h-44 object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
          />
          <BsPlayCircleFill className="absolute inset-0 m-auto text-gray-700 opacity-80 group-hover:opacity-100 transition" size={70}/>
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-700 drop-shadow-lg">
            {play.name}
          </h3>

          {play.user && (
            <div className="flex items-center justify-center gap-2 mt-2 text-gray-700 text-sm">
              <img
                className="w-8 h-8 rounded-full border border-white/40 shadow-md"
                src={play.user.avatarUrl?.length ? play.user.avatarUrl : userImage}
                alt="avatar"
              />
              <span>{play.user.displayName}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between items-center mt-4 px-2 text-gray-700 ">
            <Like likeObj={likeObject()} onLikeClick={null} />
            <PlayShare
              cover={cover}
              link={`/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`}
            />
            {play.language === "ts" ? (
              <BiLogoTypescript className="text-blue-400" size={22}/>
            ) : (
              <BiLogoJavascript className="text-yellow-400" size={22}/>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlayCard;
