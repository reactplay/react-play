
const Movie = ({movie}) => {
  const {
    id,
    title,
    year,
    poster,
    rating,
    director} = movie;

  return (
    <li className="movie">
      <img src={poster} alt={title} />
      <p>{title} by {director} was released on {year}</p>
      <p>Rating: {rating}</p>
    </li>
  );
}

export default Movie;