import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import PlayThumbnail from "./PlayThumbnail";
import { useLocation, useNavigate } from "react-router-dom";
import './playlist.css';

const PlayList = () => {
  const plays = useSearchFilter();
  const navigate=useNavigate();
  if(plays===null || plays===undefined){
    navigate('/play-not-found', {replace: true});
  }
  else{
      return (
        <>
          <ol className="list-plays">
            {plays.map((play, index) => (
              <PlayThumbnail key={play.id} play={play} />
            ))}
          </ol>
        </>
      )};
    }

export default PlayList;
