import 'App.css';
import { SearchContext } from 'common/search/search-context';
import { getPlaysOnSearch } from 'meta/play-meta';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const { searchTerm } = useContext(SearchContext);
  console.log(searchTerm);
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const filteredPlays = getPlaysOnSearch(searchTerm);
    setPlays(filteredPlays);
  }, [searchTerm]);
  
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
    </div>
  );
}

export default App;
