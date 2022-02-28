import MovieContainer from '../movies/MovieContainer';
import "../movies/movies.css";
import withFetch from "./MovieWrapper";


const MovieListWithHOC = (props) => {
  const { movies } = props;

  return (
    <div className="movie-container">
      <h2>Movie List - With HoC</h2>
      <MovieContainer data={movies} />
    </div>
  );
};

export default withFetch(MovieListWithHOC);
