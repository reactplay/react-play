import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LevelBadge from 'common/components/LevelBadge';
import { email2Slug } from 'common/services/string';

const Author = ({ user }) => {
  const getHostName = () => {
    var url = window.location.href;
    var arr = url.split('/');
    var result = arr[0] + '//' + arr[2];

    return result;
  };

  return (
    <div className="header-author flex items-center gap-2">
      <img alt="avatar" className="rounded-full" height="25px" src={user?.avatarUrl} width="25px" />
      <Link
        className="play-anchor"
        href={`${getHostName()}/contributors/${email2Slug(user.email)}/badges`}
        rel="noopener noreferrer"
        target="_blank"
        to={`/contributor/${user.id}`}
      >
        <strong>{user?.displayName}</strong>
      </Link>
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
    <div className="header-leftcol overflow-hidden">
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
        <div className="header-secondary">
          {play.user && <Author githubUsername={play.github} user={play.user} />}
        </div>
      </div>
    </div>
  );
};

export default PlayHeaderInfo;
