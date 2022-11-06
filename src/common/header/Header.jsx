import FilterPlays from "common/search/FilterPlays";
import SearchPlays from "common/search/SearchPlays";
import HeaderNav from "./HeaderNav";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [reset, setReset] = useState({ search: false, filter: false });

  useEffect(() => {
    if (location.state) {
      setReset({ ...location.state });
    }
  }, [location.state]);

  const [showHideBits, setShowHideBits] = useState({
    showSearch: false,
    showBrowse: false,
    setHeaderStyle: true,
    setShowBadges: false,
  });

  useEffect(() => {
    if (pathName !== "/plays") {
      setReset({ search: false, filter: false });
    }
    if (pathName === "/") {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: false,
        setShowBadges: false,
      });
    } else if (pathName === "/ideas" || pathName === "/tech-stacks") {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true,
        setShowBadges: false,
      });
    } else if (!pathName.includes("me") && pathName.includes("badges")) {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true,
        setShowBadges: true,
      });
    } else if (pathName.includes("me") && pathName.includes("badges")) {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true,
        setShowBadges: false,
      });
    } else if (pathName.startsWith("/plays")) {
      setShowHideBits({
        showSearch: true,
        showBrowse: false,
        setHeaderStyle: true,
        setShowBadges: false,
      });
    }
  }, [pathName]);

  return (
    <header
      className={`app-header ${
        showHideBits.setHeaderStyle ? "" : " app-header-home"
      }`}
      data-testid="app-header"
    >
      <span>
        <Link to="/" className="app-logo" data-testid="app-logo">
          <span className="sr-only">React Play</span>
        </Link>
      </span>
      <div className="app-header-search">
        {showHideBits.showSearch && (
          <>
            <SearchPlays reset={reset} />
            <FilterPlays reset={reset} />
          </>
        )}
      </div>
      <HeaderNav
        setShowBadges={showHideBits.setShowBadges}
        showBrowse={showHideBits.showBrowse}
      />
    </header>
  );
};

export default Header;
