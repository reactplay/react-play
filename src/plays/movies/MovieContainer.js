import PlayHeader from "common/playlists/PlayHeader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlayById } from "meta/play-meta-util";
import { movies } from "data/movies";
import Movie from "./Movie";
import "./movies.css";

const fetchMovies = () => {
  return movies;
};

const MovieContainer = () => {
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = fetchMovies();
    console.log("MovieContainer: useEffect: movies: ", movies);
    setMovies(movies);
  }, []);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <div className="movie-container">
            <ul className="movie-list">
              {movies.map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
