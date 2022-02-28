import Movie from "./Movie";
import "./movies.css";

const MovieContainer = ({ data }) => {
  return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list">
        {data.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieContainer;
