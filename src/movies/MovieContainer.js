

import { movies } from '../data/movies';

const fetchMovies = () => {
  return movies;
};

const MovieContainer = () => {
  console.log(fetchMovies());
  
  return(
    <div className="movie-container">
      <h2>Movie Container</h2>
    </div>
  );
};

export default MovieContainer;

