import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

import useGitHub from 'common/hooks/useGitHub';
import LevelBadge from 'common/components/LevelBadge';

const Author = ({github}) => {
  const { data, error, isLoading } = useGitHub(github);
  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <span>Error: {error.message}</span>}
      {data && (
        <div className="header-author">
          by <a 
              href={`https://github.com/${github}`}
              target="_blank"
              className="play-anchor"
              rel="noopener noreferrer">
                <strong>{data.name}</strong>
              </a>
        </div>
      )}
    </>  
  );
};

const Tags = ({tags}) => {
  return (
    <ul className="list-tags">
      {tags.map((tag, index) => (
        <li key={index}>
          <span className="play-tag">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
};

const PlayHeaderInfo = ({ play }) => {
  
  const structureTags = play?.play_tags.reduce((pre, next) => {
    return pre.concat(next.tag.name)
  }, [])

  return (
    <div className="header-leftcol">
      <div className="header-leftcol-action">
        <Link to="/plays" className="action">
          <IoMdArrowBack className="icon" size="24px" />
          <span className="sr-only">Back</span>
        </Link>
      </div>
      <div className="header-leftcol-contents">
        <div className="header-primary">
          <h3 className="header-title">{play.name}</h3>
          <div className="header-title-tags">
            <LevelBadge level={play.level.name} /> { structureTags && <Tags tags={structureTags.toString().split(',')} /> }
          </div>
        </div>
        <div className="header-secondary">
          { play.github && <Author github={play.github} /> }
        </div>
      </div>
    </div>
  );
};

export default PlayHeaderInfo;
