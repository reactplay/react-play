import PlayThumbnail from "./PlayThumbnail";

import { getFeaturedPlays } from "meta/play-meta-util";

const FeaturedPlays = () => {
  const plays = getFeaturedPlays();
  console.log(plays);

  return (
    <>
      <h3 className="plays-title-primary">
          Trending <strong>Plays</strong>
      </h3>
      <ul className="list-plays">
        {plays.map((play, index) => (
          <PlayThumbnail key={play.id} play={play} />
        ))}
      </ul>
    </>
  )};

export default FeaturedPlays;
