import SearchPlays from 'common/search/SearchPlays';
import './header.css';

const Header = () => {

  return (
    <header className="app-header">
        <span><a href="/">React Play</a></span>
        <ul className="header-links">
          <li>
            <SearchPlays />
          </li>
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