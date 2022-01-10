

import { useEffect, useState } from 'react';
import { movies } from '../data/movies';
import './movies.css';


const fetchMovies = () => {
  return movies;
};

const MovieContainer = () => {
  console.log(fetchMovies());

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = fetchMovies();
    console.log('MovieContainer: useEffect: movies: ', movies);
    setMovies(movies);
  }, []);

  return(
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className ="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.title} by {movie.description} was released on {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default MovieContainer;

