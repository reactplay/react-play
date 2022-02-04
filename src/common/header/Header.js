import SearchPlays from 'common/search/SearchPlays';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (pathName === '/') {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [pathName]);

  return (
    <header className="app-header">
        <span><Link to="/">React Play</Link></span>
        <ul className="header-links">
          {
            showSearch && <li>
              <SearchPlays />
            </li>
          }
          <li>
            <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
    </header>
  );
};

export default Header;