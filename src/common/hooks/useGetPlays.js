import { useState, useEffect, useContext, useCallback } from "react";
// import fs from "fs";
import { SearchContext } from "common/search/search-context";
import { FetchPlaysFilter } from "common/services/request/query/fetch-plays-filter";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

import { submit } from "common/services/request";
import { toKebabCase } from "common/services/string";

/**
 * Run graphql query to filter plays
 * @returns [loading, error, plays]
 */

function useGetPlays() {
  const [loading, setLoading] = useState(true);
  const [plays, setPlays] = useState([]);
  const [error, setError] = useState(null);

  const { filterPlaysBySearchString, filterPlaysByMultiTagsLevelLang } =
    FetchPlaysFilter;

  const { searchTerm, filterQuery } = useContext(SearchContext);

  const hasSearchTerm = searchTerm.length > 0;
  const hasFilterQuery =
    filterQuery.level_id.length > 0 ||
    filterQuery.tags.length > 0 ||
    filterQuery.owner_user_id.length > 0 ||
    filterQuery.language.length > 0;

  const re_filterPlaysByMultiTagsLevelLang = useCallback(
    (filterQuery) => {
      const callIt = filterPlaysByMultiTagsLevelLang(filterQuery);
      return callIt;
    },
    [filterPlaysByMultiTagsLevelLang]
  );

  const re_filterPlaysBySearchString = useCallback(
    (Obj) => {
      return filterPlaysBySearchString(Obj);
    },
    [filterPlaysBySearchString]
  );

  const refresh = () => {
    return fetchPlays();
  };

  const fetchPlays = useCallback(async () => {
    let res = [];
    setLoading(true);
    try {
      if (hasSearchTerm) {
        res = await submit(re_filterPlaysBySearchString({ name: searchTerm }));
      } else if (hasFilterQuery) {
        const payload = re_filterPlaysByMultiTagsLevelLang(filterQuery);
        res = await submit(payload);
      } else {
        res = await submit(FetchPlaysSimple());
      }
      // Check if the play exists locally
      // const locallyAvailablePlays = filterLocallyAvailablePlays(res);
      setPlays(res);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
    return res;
  }, [
    hasSearchTerm,
    hasFilterQuery,
    searchTerm,
    filterQuery,
    re_filterPlaysBySearchString,
    re_filterPlaysByMultiTagsLevelLang,
  ]);

  useEffect(() => {
    fetchPlays();
  }, [fetchPlays]);

  return [loading, error, plays, refresh];
}

export default useGetPlays;
