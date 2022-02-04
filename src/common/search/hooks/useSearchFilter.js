import { SearchContext } from "common/search/search-context";
import { getPlaysOnSearch } from "meta/play-meta";
import { useContext, useEffect, useState } from "react";

const useSearchFilter = () => {
  const { searchTerm } = useContext(SearchContext);
  console.log(searchTerm);
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const filteredPlays = getPlaysOnSearch(searchTerm);
    setPlays(filteredPlays);
  }, [searchTerm]);

  return plays;
};

export { useSearchFilter };

