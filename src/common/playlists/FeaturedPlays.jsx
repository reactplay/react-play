import PlayThumbnail from "./PlayThumbnail";
import useFeaturedPlays from "common/hooks/useFeaturedPlays";

const FeaturedPlays = () => {
  const [loading, error, slugs, viewsData, data, trendingPlays] = useFeaturedPlays();
  const success = !loading && !error && !!trendingPlays.length;
  
  console.log(slugs)
  console.log(viewsData)
  console.log(data)
  console.log(trendingPlays)

  return (
    <>
      <h2 className="plays-title-primary">
        Trending <strong>Plays</strong>
      </h2>
      <ul className="list-plays">
        {loading && <p>Loading...</p>}
        {error && <p>{error?.message ?? "Something went wrong"}</p>}
        {success &&
          trendingPlays?.map((play, index) => (
            <PlayThumbnail key={play.id} play={play} />
          ))}
      </ul>
    </>
  )
};

export default FeaturedPlays;
