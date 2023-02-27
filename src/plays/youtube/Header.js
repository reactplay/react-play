import { useState, useEffect } from 'react';
import { toggleMenu } from './utils/appSlice';
import { useDispatch } from 'react-redux';
import searchIcon from './assets/search.png';
import { GOOGLE_AUTOCOMPLETE_API } from './constant';

const Header = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!searchTxt.length) {
      setSearchSuggestions([]);
    }

    const timer = searchTxt.length ? setTimeout(getSearchSuggestions(), 200) : null;

    return () => {
      clearInterval(timer);
    };
  }, [searchTxt]);

  const getSearchSuggestions = async () => {
    let data = await fetch(GOOGLE_AUTOCOMPLETE_API + searchTxt);
    let json = await data.json();
    setSearchSuggestions([...json[1]]);
  };

  return (
    <div className="header-container header d-flex justify-between align-center">
      <div className="d-flex align-center justify-between" id="first">
        <button className="p-5">
          <img
            alt="hamburge"
            className="hamburger-menu"
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/256/external-mobile-application-hamburger-menu-setting-interface-basic-bold-tal-revivo.png"
            onClick={() => handleToggleMenu()}
          />
        </button>
        <button className="p-5">
          {/* <img
            className="logo-img"
            src="shorturl.at/bhmnr"
          /> */}
          <a href="/plays/rajeev1202/youtube">
            <img
              alt="youtube-logo"
              className="logo-img"
              src="https://cdn.cdnlogo.com/logos/y/92/youtube.svg"
            />
          </a>
        </button>
      </div>
      <div id="middle">
        {/* <span>{searchTxt}</span> */}
        <div className="d-flex">
          <input
            className="searchBar"
            placeholder="search videos"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <img alt="search" className="btn-search" src={searchIcon} />
        </div>

        {searchSuggestions.length ? (
          <div className="search-suggestions">
            <ul>
              {searchSuggestions.map((data, index) => (
                <li className="ss-list" key={index}>
                  <img alt="search-logo" className="ss-logo" src={searchIcon} />
                  {data}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div id="last">
        <img
          alt="user-logo"
          className="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/44/44948.png?w=740&t=st=1677131842~exp=1677132442~hmac=926791ea4e38164e8b71003dcea595d989478305f346d2018d6c1baf7d53f55b"
        />
      </div>
    </div>
  );
};

export default Header;
