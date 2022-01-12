

import { useEffect, useState } from 'react';
import { movies } from '../data/movies';
import Movie from './Movie';
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
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>      
    </div>
  );
};

export default MovieContainer;

