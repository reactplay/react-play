import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LevelBadge from 'common/components/LevelBadge';
import { format } from 'date-fns';
import * as allLocales from 'date-fns/locale';

const Author = ({ user, githubUsername, playCreatedAt }) => {
  function formatPlayDate() {
    const locale = navigator.language.split('-').join('');
    const dnsLocale = allLocales[locale] ?? allLocales.enUS;

    return format(new Date(playCreatedAt), 'dd MMMM, yyyy', {
      locale: dnsLocale
    });
  }

  return (
    <div className="flex items-center gap-2 header-author">
      <img alt="avatar" className="rounded-full" height="25px" src={user?.avatarUrl} width="25px" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a
          className="play-anchor"
          href={`https://github.com/${githubUsername}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{user?.displayName}</strong>
        </a>
        <small className="header-desc">Created on {formatPlayDate()}</small>
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
            <Author githubUsername={play.github} user={play.user} playCreatedAt={play.created_at} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayHeaderInfo;
