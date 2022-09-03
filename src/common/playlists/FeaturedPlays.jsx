import PlayThumbnail from "./PlayThumbnail";
import useFeaturedPlays from "common/hooks/useFeaturedPlays";

const FeaturedPlays = () => {
  const [loading, error, data, slugs] = useFeaturedPlays();
  const success = !loading && !error && !!data.length && !!slugs.length;

  const trendingPlays = slugs.filter((play) => slugs.includes(play.slug));

  return (
    <>
      <h3 className="plays-title-primary">
        Trending <strong>Plays</strong>
      </h3>
      <ul className="list-plays">
        {loading && <p>Loading...</p>}
        {error && <p>{error?.message ?? "Something went wrong"}</p>}
        {success &&
          trendingPlays?.map((play, index) => (
            <PlayThumbnail key={play.id} play={play} />
          ))}
      </ul>
    </>
  );
};

export default FeaturedPlays;
