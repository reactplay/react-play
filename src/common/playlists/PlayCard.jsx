import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import PlayShare from './PlayShare.jsx';
import Like from 'common/components/Like/Like';
import userImage from 'images/user.png';

const formatDate = (dateString) => dateString || '';

function PlayCard({ play, cover, likeObject }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!play || !play.github || !play.slug) return null;

  const avatarSrc =
    play?.user?.avatarUrl && play.user.avatarUrl.length ? play.user.avatarUrl : userImage;

  const LanguageBadge = () => {
    if (play.language === 'ts') {
      return (
        <div className="flex items-start space-x-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-md w-fit mb-3">
          <BiLogoTypescript color="#007acc" size={16} />
          <span>Typescript</span>
        </div>
      );
    }
    if (play.language === 'js') {
      return (
        <div className="flex items-start space-x-1 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-md w-fit mb-3">
          <BiLogoJavascript color="#F0DB4F" size={16} />
          <span>Javascript</span>
        </div>
      );
    }

    return null;
  };

  const linkTo = `/plays/${encodeURI(play.github.toLowerCase())}/${play.slug}`;

  return (
    <Link className="group block" to={linkTo}>
      <div className="play-card-container max-w-sm bg-white rounded-xl overflow-hidden flex flex-col h-full">
        {cover && (
          <div className="relative h-48">
            <img alt={play.name} className="w-full h-full object-cover" src={cover} />
            <div className="absolute inset-0 thumb-overlay pointer-events-none" />
            <BsPlayCircleFill
              className="absolute inset-0 m-auto z-10 opacity-0 transition-opacity duration-200 pointer-events-none"
              color="white"
              size={80}
            />
          </div>
        )}

        <div className="p-5 flex flex-col flex-grow">
          <LanguageBadge />

          {play.user?.displayName && (
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <img
                alt="avatar"
                className="rounded-full h-6 w-6 object-cover mr-2"
                loading="lazy"
                src={avatarSrc}
              />
              <span className="font-semibold text-gray-800">{play.user.displayName}</span>
              {play.date && (
                <>
                  <span className="mx-2">—</span>
                  <span className="text-gray-500">{formatDate(play.date)}</span>
                </>
              )}
            </div>
          )}

          <div className="card-header text-md font-bold text-gray-900 mb-2">{play.name}</div>

          {play.description && (
            <div className="mb-6 flex-grow">
              <p className={`text-gray-700 text-xs ${!isExpanded ? 'line-clamp-3' : ''}`}>
                {play.description}
              </p>
            </div>
          )}

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
            {likeObject &&
              (() => {
                const data = likeObject?.();

                return (
                  <div className="inline-flex items-center gap-2 whitespace-nowrap">
                    <Like likeObj={data} onLikeClick={null} />
                  </div>
                );
              })()}

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3" onClick={(e) => e.preventDefault()}>
                <PlayShare cover={cover} link={linkTo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
    .group:hover .play-card-container .relative .z-10 { opacity: 1; }

    .group:hover .play-card-container .relative .thumb-overlay {
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      transition: background-color 200ms ease, backdrop-filter 200ms ease;
    }
  `}
      </style>
    </Link>
  );
}

export default PlayCard;
