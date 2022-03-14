import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import { Link } from "react-router-dom";
import './playlist.css';

import { GoPlay } from "react-icons/go";
import { BsPlayFill, BsShareFill, BsGithub } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaComment } from "react-icons/fa";

const PlayList = () => {
  const plays = useSearchFilter();

  return (
    <>
      <div className="list-plays">
        <button className="btn-scroll">
          <MdOutlineKeyboardArrowLeft size="36px" className="icon" />
        </button>
        <ul>
          <li className="active">
            <Link to="#">
              <div className="play-title">Play Name</div>
              <div className="play-status">
                <BsPlayFill size="18px" color="var(--color-neutral-80)"/>
                <div className="default">Play now</div>
                <div className="current">Playing..</div>
              </div>
            </Link>
          </li>
          {plays.map((play, index) => (
            <li key={play.id}>
              <Link to={play.path}>
                <div className="play-title">{play.name}</div>
                <div className="play-status">
                  <GoPlay size="24px" color="var(--color-brand-primary)" className="icon" />
                  <div className="default">Play now</div>
                  <div className="current">Playing</div>
                </div>
              </Link>
            </li>
          ))}
          
          <li>
            <Link to="#">
              <div className="play-title">Play Name</div>
              <div className="play-status">
                <GoPlay size="24px" color="var(--color-brand-primary)" className="icon" />
                <div className="default">Play now</div>
                <div className="current">Playing</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="play-title">Play Name</div>
              <div className="play-status">
                <GoPlay size="24px" color="var(--color-brand-primary)" className="icon" />
                <div className="default">Play now</div>
                <div className="current">Playing</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="play-title">Play Name</div>
              <div className="play-status">
                <GoPlay size="24px" color="var(--color-brand-primary)" className="icon" />
                <div className="default">Play now</div>
                <div className="current">Playing</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="play-title">Play Name</div>
              <div className="play-status">
                <GoPlay size="24px" color="var(--color-brand-primary)" className="icon" />
                <div className="default">Play now</div>
                <div className="current">Playing</div>
              </div>
            </Link>
          </li>
        </ul>
        <button className="btn-scroll">
          <MdOutlineKeyboardArrowRight size="36px" className="icon"/>
        </button>
      </div>
      <div className="play-details">
        <div className="play-details-header">
          <h3 className="header-title">Header Title Goes here</h3>
          <div className="header-actions">
            <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer">
              <BsGithub className="icon" size="24px" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noopener noreferrer">
              <FaComment className="icon" size="24px" />
              <span className="sr-only">Twitter</span>
              <div className="badge"></div>
            </a>
            <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer" className="app-header-btn">
              <BsShareFill className="icon" size="16px" />
              <span className="btn-label">Share</span>
            </a>
          </div>
        </div>
        <div className="play-details-body">
        </div>
      </div>
    </>
  );
};

export default PlayList;
