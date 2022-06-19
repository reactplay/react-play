import { SearchContext } from "common/search/search-context";
import { useContext, useEffect, useState } from "react";

const useSearchFilter = () => {
  const { searchTerm, filterQuery } = useContext(SearchContext);
  const data = [];
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const filteredPlays = filterPlays(data, searchTerm, filterQuery);
    setPlays(filteredPlays);
  }, [searchTerm, filterQuery]);
  
  return plays;
};

const filterPlays = (data, searchTerm, filterQuery) => {
  let filteredPlays = [];
  const { level, tags, creator, language } = filterQuery;

  const searchedPlays = getPlaysOnSearch(data, searchTerm);

  filteredPlays = searchedPlays.filter((play) => {
    return play.github === creator || !creator;
  });

  filteredPlays = filteredPlays.filter((play) => {
    return play.level.name === level || !level;
  });

  filteredPlays = filteredPlays.filter((play) => {
    return play.play_tags.includes(tags[0]) || !tags[0];
  });

  filteredPlays = filteredPlays.filter((play) => {
    const lang = play.language || "js";
    return lang === language || !language;
  });

  return filteredPlays;
};

const getPlaysOnSearch = (data, searchTerm) => {
  return data?.filter((play) => {
    return (
      play?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      play?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};

export { useSearchFilter };