import { useState, useEffect } from "react";
import { RiMedal2Fill } from "react-icons/ri";
import { IoMdTrophy } from "react-icons/io";
import { IoRibbon } from "react-icons/io5";

import useGitHub from 'common/hooks/useGitHub';

const LevelBadge = ({ level }) => {
  const [playLevel, setPlayLevel] = useState();

  useEffect(() => {
    switch (level) {
      case "Beginner":
        setPlayLevel(
          <span className="play-level play-level-1">
            <IoRibbon size="16px" /> {level}
          </span>);
        break;
      case "Intermediate":
        setPlayLevel(
          <span className="play-level play-level-2">
            <RiMedal2Fill size="16px" /> {level}
          </span>);
        break;
      case "Advanced":
        setPlayLevel(
          <span className="play-level play-level-3">
            <IoMdTrophy size="16px" /> {level}
          </span>);
        break;
      default:
        setPlayLevel(
          <span className="play-level play-level-1">
            <IoRibbon size="16px" /> {level}
          </span>);
    }
  }, [level]);
  return (
    <>{playLevel}</>
  );
};

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
   
  return (
    <div>
      <div className="header-wrapper">
        <h3 className="header-title">{play.name}</h3>
        <LevelBadge level={play.level} />
      </div>
      <div>{play.description}</div>
      <div className="header-secondary">
        { play.github && <Author github={play.github} /> }
        { play.tags && <Tags tags={play.tags.split(', ')} /> }
      </div>
    </div>
  );
};

export default PlayHeaderInfo;
