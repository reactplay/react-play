const Movie = ({ movie }) => {
  const { title, year, poster, rating, director } = movie;

  return (
    <li className="movie">
      <img alt={title} src={poster} />
      <p>
        {title} by {director} was released on {year}
      </p>
      <p>Rating: {rating}</p>
    </li>
  );
};

export default Movie;
