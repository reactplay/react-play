import './App.css';
import { CountDownTimer, CurrentTimer } from './date-time-counter/index.js';
import MovieContainer from './movies/MovieContainer';

function App() {
  return (
    <div className="App">
      <CurrentTimer />
      <CountDownTimer targetDate = {'Jan 25, 2022 15:37:25'}/>
      <MovieContainer />
    </div>
  );
}

export default App;
