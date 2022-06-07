import { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";
import { BiSearch } from "react-icons/bi";
import useBackListener from "common/routing/hooks/useBackListener";

const SearchPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchTerm } = useContext(SearchContext);
  const inputRef = useRef(null);
  useBackListener(({ action }) => {
    if (action === "POP") {
      inputRef.current.value = "";
      setSearchTerm("");
    }
    if (action === "PUSH") {
      inputRef.current.value = "";
      setSearchTerm("");
    }
  });

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    if (location.pathname !== "/plays") {
      navigate("/plays", { replace: true });
    }
    // if (event.key === "Enter") {
    // }
  };

  return (
    <>
      <div className="search-input">
        <BiSearch className="search-input-icon" size="24px" />
        <input
          className="search-input-text"
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
