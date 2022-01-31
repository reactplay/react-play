import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { getPlaysToInclude } from './meta/play-meta';


function App() {
  const [plays] = useState(getPlaysToInclude());
  return (
    <div className="App">
      <nav className="left-nav">
        <ul className="link-list">
          {
            plays.map((play, index) => (
              <li key={index}>
                <Link to={play.path}>{play.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="plays">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
