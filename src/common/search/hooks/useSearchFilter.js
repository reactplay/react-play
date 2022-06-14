import { SearchContext } from "common/search/search-context";
import { useContext, useEffect, useState } from "react";

import useGetPlays from 'common/hooks/useGetPlays';

const useSearchFilter = () => {
  const { searchTerm, filterQuery } = useContext(SearchContext);
  const [loading, error, data] = useGetPlays();
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    if (loading) {
      console.log('loading');
    } else {
      console.log(data);
      const filteredPlays = filterPlays(data, searchTerm, filterQuery);
      setPlays(filteredPlays);
    }
  }, [searchTerm, filterQuery, loading]);
  
  return plays;
};

const filterPlays = (data, searchTerm, filterQuery) => {
  let filteredPlays = [];
  const { level, tags, creator, language } = filterQuery;
  
  const searchedPlays = getPlaysOnSearch(data, searchTerm);
  console.log(searchedPlays);

  filteredPlays = searchedPlays.filter(play => {
    return (play.github === creator || !creator);
  });

  filteredPlays = filteredPlays.filter(play => {
    return (play.level.name === level || !level);
  });

  filteredPlays = filteredPlays.filter(play => {
    return (play.play_tags.includes(tags[0]) || !tags[0]);
  });

  filteredPlays = filteredPlays.filter(play => {
    const lang = play.language || 'js';
    return (lang === language || !language);
  });
    
  return filteredPlays;
}

const getPlaysOnSearch = (data, searchTerm) => {
  return data.plays.filter(play => {
    return (play.name.toLowerCase().includes(searchTerm.toLowerCase())
      || play.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });
}

export { useSearchFilter };

