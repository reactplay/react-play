import MovieAnalytics from '../movies/MovieAnalytics';
import "../movies/movies.css";
import withFetch from "./MovieWrapper";

const MovieAnalyticsWithHOC = (props) => {
  const { movies } = props;
  return (
    <div className="movie-container">
      <h2>Movie Analytics - With HoC</h2>
      <MovieAnalytics data={movies} />
    </div>
  );
};

export default withFetch(MovieAnalyticsWithHOC);
