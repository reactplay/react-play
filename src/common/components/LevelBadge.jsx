import { useState, useEffect } from 'react';
import { RiMedal2Fill } from 'react-icons/ri';
import { IoMdTrophy } from 'react-icons/io';
import { IoRibbon } from 'react-icons/io5';

const LevelBadge = ({ level }) => {
  const [playLevel, setPlayLevel] = useState(null);

  useEffect(() => {
    switch (level) {
      case 'Beginner':
        setPlayLevel(
          <span className="play-level play-level-1">
            <IoRibbon size="16px" /> {level}
          </span>
        );

        break;
      case 'Intermediate':
        setPlayLevel(
          <span className="play-level play-level-2">
            <RiMedal2Fill size="16px" /> {level}
          </span>
        );

        break;
      case 'Advanced':
        setPlayLevel(
          <span className="play-level play-level-3">
            <IoMdTrophy size="16px" /> {level}
          </span>
        );

        break;
      default:
        setPlayLevel(
          <span className="play-level play-level-1">
            <IoRibbon size="16px" /> {level}
          </span>
        );
    }
  }, [level]);

  return <>{playLevel}</>;
};

export default LevelBadge;
