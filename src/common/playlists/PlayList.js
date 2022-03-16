import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import { Link } from "react-router-dom";
import './playlist.css';

import { BsPlayCircleFill } from "react-icons/bs";

const PlayList = () => {
  const plays = useSearchFilter();

  return (
    <>
      <ol className="list-plays">
        {plays.map((play, index) => (
          <li key={play.id}>
            <Link to={play.path} state={{ id: play.id }}>
              <div className="play-title">{play.name}</div>
              <div className="play-status">
                <BsPlayCircleFill size="18px" color="var(--color-neutral-80)"/>
                <div className="default">Play now</div>
                <div className="current">Playing..</div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )};

export default PlayList;
