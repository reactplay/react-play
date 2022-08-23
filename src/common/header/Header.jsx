import FilterPlays from "common/search/FilterPlays";
import SearchPlays from "common/search/SearchPlays";
import HeaderNav from "./HeaderNav";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import ReactSwitch from "react-switch";

const Header = ({ toggleTheme, theme}) => {
  const location = useLocation();
  const pathName = location.pathname;

  const [showHideBits, setShowHideBits] = useState({
    showSearch: false,
    showBrowse: false,
    setHeaderStyle: true,
  });

  useEffect(() => {
    if (pathName === "/") {
      setShowHideBits((prev)=>({
        ...prev,
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: false,
      }));
    } else if (pathName === "/ideas") {
      setShowHideBits((prev) => ({
        ...prev,
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true,
      }));
    } else if (pathName === "/tech-stacks") {
      setShowHideBits((prev) => ({
        ...prev,
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true,
      }));
    } else if (pathName.startsWith("/plays")) {
      setShowHideBits((prev) => ({
        ...prev,
        showSearch: true,
        showBrowse: false,
        setHeaderStyle: true,
      }));
    }
  }, [pathName]);

  
  return (  
    <header
      className={`app-header ${
        showHideBits.setHeaderStyle ? "" : " app-header-home"
      }`}
    >
      <span className="header-span">
        <Link to="/" className="app-logo">
          <span className="sr-only">React Play</span>
        </Link>
        <span className="switch-span"> <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/></span>
      </span>
      <div className="app-header-search">
        {showHideBits.showSearch && (
          <>
            <SearchPlays />
            <FilterPlays />
          </>
        )}
      </div>
      <HeaderNav showBrowse={showHideBits.showBrowse} />
    </header>   
  );
};

export default Header;
