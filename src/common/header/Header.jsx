import FilterPlays from 'common/search/FilterPlays';
import SearchPlays from 'common/search/SearchPlays';
import HeaderNav from './HeaderNav';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  
  const [showSearch, setShowSearch] = useState(false);
  const [headerStyle, setHeaderStyle] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);

  useEffect(() => {
    if (pathName === '/' || pathName === '/ideas') {
      setHeaderStyle(false);
      setShowSearch(false);
      setShowBrowse(true);
    } else {
      setHeaderStyle(true);
      setShowSearch(true);
      setShowBrowse(false);
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
        <HeaderNav showBrowse={showBrowse}/>
    </header>
  );
};


export default Header;