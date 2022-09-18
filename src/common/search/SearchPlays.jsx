import { useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";
import { BiSearch } from "react-icons/bi";

const SearchPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchTerm } = useContext(SearchContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== '/plays') {
      inputRef.current.value = "";
      setSearchTerm("");
    }
  },[location.pathname])

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
      if (location.pathname !== "/plays") {
        navigate("/plays", { replace: true });
      }
    }
  };

  return (
    <>
      <div className="search-input" data-testid="plays-search-box-container">
        <BiSearch
          className="search-input-icon"
          data-testid="plays-search-box-icon"
          size="24px"
        />
        <input
          className="search-input-text"
          data-testid="plays-search-box-input-field"
          type="text"
          placeholder="Search for a play..."
          onKeyUp={handleSearch}
          ref={inputRef}
        />
      </div>
    </>
  );
};

export default SearchPlays;
