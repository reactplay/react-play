import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";

const PlayThumbnail = ({ play }) => {
  return (
    <li key={play.id}>
      <Link to={play.path} state={{ id: play.id }}>
        {/*<img src={Cover} alt={play.id} />*/}
        <div className="play-title">{play.name}</div>
        <div className="play-status">
          <BsPlayCircleFill size="18px" color="var(--color-neutral-80)" />
          <div className="default">Play now</div>
          <div className="current">Playing..</div>
        </div>
      </Link>
    </li>
  );
};

export default PlayThumbnail;
