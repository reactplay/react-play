import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="left-nav">
        <ul className="link-list">
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/countdown">CountDown Timer</Link>
          </li>
        </ul>
      </nav>
      <div className="plays">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
