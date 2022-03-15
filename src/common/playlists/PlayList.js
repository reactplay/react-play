import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import { Link } from "react-router-dom";
import './playlist.css';

import { BsPlayFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


const PlayList = () => {
  const plays = useSearchFilter();

  return (
    <>
      <div className="list-plays">
        <button className="btn-scroll">
          <MdOutlineKeyboardArrowLeft size="36px" className="icon" />
        </button>
        <ul>
          {plays.map((play, index) => (
            <li key={play.id}>
              <Link to={play.path} state={{ id: play.id }}>
                <div className="play-title">{play.name}</div>
                <div className="play-status">
                  <BsPlayFill size="18px" color="var(--color-neutral-80)"/>
                  <div className="default">Play now</div>
                  <div className="current">Playing..</div>
                </div>
              </Link>
            </li>
          ))}
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
        </ul>
        <button className="btn-scroll">
          <MdOutlineKeyboardArrowRight size="36px" className="icon"/>
        </button>
      </div>
    </>
  )};

export default PlayList;
