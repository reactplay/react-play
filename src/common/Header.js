
import './header.css';

const Header = () => {

  return (
    <header className="app-header">
        <span>React Play</span>
        <ul className="header-links">
          <li>
            <a href="https://github.com/atapas/react-play" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-play" target="_blank">NPM</a>
          </li>
        </ul>
    </header>
  );
};

export default Header;