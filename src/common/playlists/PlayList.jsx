import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import PlayThumbnail from "./PlayThumbnail";

import './playlist.css';

const PlayList = () => {
  const plays = useSearchFilter();
  if(Object.keys(plays).length===0){
    return(
      <>
        <h2>Play Not Found</h2>
      </>
    )
  }
  return (
    <>
      <ol className="list-plays">
        {plays.map((play, index) => (
          <PlayThumbnail key={play.id} play={play} />
        ))}
      </ol>
    </>
  )};

export default PlayList;
