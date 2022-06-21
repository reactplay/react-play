import PlayThumbnail from "./PlayThumbnail";
import useFeaturedPlays from "common/hooks/useFeaturedPlays";

const FeaturedPlays = () => {
  const [loading, error, data] = useFeaturedPlays();

  return (
    <>
      <h3 className='plays-title-primary'>
        Trending <strong>Plays</strong>
      </h3>
      <ul className='list-plays'>
        {data?.map((play, index) => (
          <PlayThumbnail key={play.id} play={play} />
        ))}
      </ul>
    </>
  );
};

export default FeaturedPlays;
