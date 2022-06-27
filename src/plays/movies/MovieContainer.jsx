import PlayHeader from "common/playlists/PlayHeader";
import { useEffect, useState } from "react";
import Movie from "./Movie";

import useFetch from "common/hooks/useFetch";

import "./movies.css";

const MovieContainer = (props) => {

  const MOVIE_API_URI = 'https://json-faker.onrender.com/movies';
  const { data, loading, error } = useFetch(MOVIE_API_URI);

  console.log("data", data);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data.movies);
  }, [data]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="movie-container">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {movies && (<ul className="movie-list">
              {movies.map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
            </ul>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
