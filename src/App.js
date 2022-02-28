import './App.css';
// import MovieContainer from './movies/MovieContainer';

import MovieListWithHOC from './hoc/MovieListWithHOC';
import MovieAnalyticsWithHOC from './hoc/MovieAnalyticsWithHOC';


function App() {
  return (
    <div className="App">
      <MovieListWithHOC />
      <MovieAnalyticsWithHOC />
    </div>
  );
}

export default App;
