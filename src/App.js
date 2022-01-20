import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="left-nav">
        <Link to="/movies">Movies</Link>
        <Link to="/clock">Clock</Link>
        <Link to="/countdown">CountDown Timer</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
