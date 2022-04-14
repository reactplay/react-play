import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import PlayThumbnail from "./PlayThumbnail";

import './playlist.css';

const PlayList = () => {
  const plays = useSearchFilter();
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
