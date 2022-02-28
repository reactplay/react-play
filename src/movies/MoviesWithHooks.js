
import { useFetch } from '../hooks/useFetch';
import MovieAnalytics from '../movies/MovieAnalytics';

const MoviesWithHooks = () => {
  const [loading, data] = useFetch('https://json-faker.onrender.com/movies');
  console.log('movies: ', data);
  return(
    <div>
      <h1>Movie Analytics with Hooks</h1>
      {
        loading 
          ? <h2>Loading...</h2> 
          : <MovieAnalytics data={data.movies} />}
    </div>
  );
};

export default MoviesWithHooks;