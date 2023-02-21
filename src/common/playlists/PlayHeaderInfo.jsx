import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LevelBadge from 'common/components/LevelBadge';
import { format } from 'date-fns';
import * as allLocales from 'date-fns/locale';
import { useState } from 'react';
import { email2Slug } from 'common/services/string';

const Author = ({ playCreatedAt, user }) => {
  const [formattedPlayDate] = useState(() => {
    // Get the locale from the local browser
    const locale = navigator.language.split('-').join('');

    // Get matching locale from date-fns
    const dnsLocale = allLocales[locale] ?? allLocales.enUS;

    // Return formatted date with the browser locale
    return format(new Date(playCreatedAt), 'MMM dd, yyyy', {
      locale: dnsLocale
    });
  });

  const getHostName = () => {
    var url = window.location.href;
    var arr = url.split('/');
    var result = arr[0] + '//' + arr[2];

    return result;
  };

  return (
    <div className="flex items-center gap-2 header-author">
      <img alt="avatar" className="rounded-full" height="25px" src={user?.avatarUrl} width="25px" />
      <div className="flex items-center gap-2">
        <a
          href={`${getHostName()}/contributors/${email2Slug(user.email)}/badges`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{user?.displayName}</strong>
        </a>
        <span className="text-gray-400">&bull;</span>

        {/* Formatted date goes here */}
        <small className="m-0 font-medium text-left header-desc">{formattedPlayDate}</small>
      </div>
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul className="list-tags">
      {tags.map((item, index) => (
        <li key={index}>
          <span className="play-tag">{item.tag.name}</span>
        </li>
      ))}
    </ul>
  );
};

const PlayHeaderInfo = ({ play }) => {
  return (
    <div className="overflow-hidden header-leftcol">
      <div className="header-leftcol-action">
        <Link className="action" to="/plays">
          <IoMdArrowBack className="icon" size="24px" />
          <span className="sr-only">Back</span>
        </Link>
      </div>
      <div className="header-leftcol-contents">
        <div className="header-primary">
          <h3 className="header-title">{play.name}</h3>
          <div className="header-title-tags">
            <LevelBadge level={play.level.name} />{' '}
            {!!play.play_tags.length && <Tags tags={play.play_tags} />}
          </div>
        </div>
        <div className="mt-1 header-secondary">
          {play.user && (
            <Author githubUsername={play.github} playCreatedAt={play.created_at} user={play.user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayHeaderInfo;
