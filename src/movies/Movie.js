
const Movie = ({movie}) => {
  const {
    id,
    title,
    year,
    poster,
    rating,
    description} = movie;

  return (
    <li className="movie">
      <img src={poster} alt={title} />
      <p>{title} by {description} was released on {year}</p>
      <p>Rating: {rating}</p>
    </li>
  );
}

export default Movie;