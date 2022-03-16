import { Link } from "react-router-dom";
import { RiMedal2Fill } from "react-icons/ri";
import { IoMdTrophy } from "react-icons/io";
import { IoRibbon } from "react-icons/io5";

const PlayHeaderInfo = ({ play }) => {
  return (
    <div>
      <div className="header-wrapper">
        <h3 className="header-title">Header Title Goes here</h3>
        <Link to="google.com" className="play-level play-level-1">
          <IoRibbon size="16px" />
          Beginner
        </Link>
        <Link to="google.com" className="play-level play-level-2">
          <RiMedal2Fill size="16px" /> Internemdiate
        </Link>
        <Link to="google.com" className="play-level play-level-3">
          <IoMdTrophy size="16px" /> Advanced
        </Link>
      </div>
      <div className="header-secondary">
        <div className="header-author">
          by <strong>GreenRoots Media</strong>
        </div>
        <ul className="list-tags">
          <li>
            <Link className="play-tag" to="google.com">
              Schedule
            </Link>
          </li>
          <li>
            <Link className="play-tag" to="google.com">
              Hook
            </Link>
          </li>
          <li>
            <Link className="play-tag" to="google.com">
              Tree
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayHeaderInfo;
