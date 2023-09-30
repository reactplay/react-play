import { RiMedal2Fill } from 'react-icons/ri';
import { IoMdTrophy } from 'react-icons/io';
import { IoRibbon } from 'react-icons/io5';

const LevelBadge = ({ level }) => {
  switch (level) {
    case 'Intermediate':
      return (
        <span className="play-level play-level-2">
          <RiMedal2Fill size="16px" /> {level}
        </span>
      );

    case 'Advanced':
      return (
        <span className="play-level play-level-3">
          <IoMdTrophy size="16px" /> {level}
        </span>
      );
    case 'Beginner':
    default:
      return (
        <span className="play-level play-level-1">
          <IoRibbon size="16px" /> {level}
        </span>
      );
  }
};

export default LevelBadge;
