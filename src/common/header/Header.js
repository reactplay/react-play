import FilterPlays from 'common/search/FilterPlays';
import SearchPlays from 'common/search/SearchPlays';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { IoSearch, IoAddSharp, IoShareSocial } from 'react-icons/io5';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  
  const [showSearch, setShowSearch] = useState(false);
  const [headerStyle, setHeaderStyle] = useState(false);

  useEffect(() => {
    if (pathName === '/') {
      setHeaderStyle(false);
      setShowSearch(false);
    } else {
      setHeaderStyle(true);
      setShowSearch(true);
    }
  }, [pathName]);

  return (
    <header className={headerStyle ? "app-header" : "app-header app-header-home"}>
        <span><Link to="/" className="app-logo"><span className="sr-only">React Play</span></Link></span>
        <div className="app-header-search">
        {
              showSearch && (
                <>                
                  <SearchPlays />
                  <FilterPlays />
                </>
                )
            }
        </div>
        <nav>
          <ul className="header-links">
            <li>
              <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer" className="app-header-btn">
                <IoSearch className="icon" />
                <span className="btn-label">Browse</span>
              </a>
            </li>
            <li className='menu-spacer'>
              <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer" className="app-header-btn app-header-btn--primary">
                <IoAddSharp className="icon" />
                <span className="btn-label">Create</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="icon" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer" className="app-header-btn app-header-btn--secondary">
                <IoShareSocial className="icon" />
                <span className="btn-label">Share</span>
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
};


export default Header;