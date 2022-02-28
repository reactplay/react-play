import './App.css';
// import MovieContainer from './movies/MovieContainer';

import MovieListWithHOC from './hoc/MovieListWithHOC';
import MovieAnalyticsWithHOC from './hoc/MovieAnalyticsWithHOC';
import MoviesWithHooks from './movies/MoviesWithHooks';

function App() {
  return (
    <div className="App">
      <MovieListWithHOC />
      <MovieAnalyticsWithHOC />
      <MoviesWithHooks />
    </div>
  );
}

export default App;
