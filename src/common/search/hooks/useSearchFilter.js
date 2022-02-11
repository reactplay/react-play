import { SearchContext } from "common/search/search-context";
import { getPlaysOnSearch } from "meta/play-meta";
import { useContext, useEffect, useState } from "react";

const useSearchFilter = () => {
  const { searchTerm, filterQuery } = useContext(SearchContext);
  
  console.log('searchTerm', searchTerm);
  console.log('filterQuery', filterQuery);
  
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const filteredPlays = filterPlays(searchTerm, filterQuery);
    setPlays(filteredPlays);
  }, [searchTerm, filterQuery]);

  return plays;
};

const filterPlays = (searchTerm, filterQuery) => {
  let filteredPlays = [];
  const { level, tags, creator } = filterQuery;
  
  const searchedPlays = getPlaysOnSearch(searchTerm);

  filteredPlays = searchedPlays.filter(play => {
    return (play.github === creator || !creator);
  });

  filteredPlays = filteredPlays.filter(play => {
    return (play.level === level || !level);
  });

  filteredPlays = filteredPlays.filter(play => {
    return (play.tags.includes(tags[0]) || !tags[0]);
  });
  
  
  return filteredPlays;
}

export { useSearchFilter };

