// THIS HOOKS GETS ALL THE PLAY AND IN CASE OF FILTER IT GENERATES THE PAYLOAD AND GETS THE
// ACTUAL DATA FROM THE BACKEND

import { useState, useEffect, useContext, useCallback } from "react";
import { SearchContext } from "common/search/search-context";
import { FetchPlaysFilter } from "common/services/request/query/fetch-plays-filter";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

import { submit } from "common/services/request";

const useGetPlays = () => {
  const [loading, setLoading] = useState(true);
  const [plays, setPlays] = useState([]);
  const [error, setError] = useState(null);

  const { filterPlaysBySearchString, filterPlaysByMultiTagsLevelLang } =
    FetchPlaysFilter;

  const { searchTerm, filterQuery } = useContext(SearchContext);

  const hasSearchTerm = searchTerm.length > 0;
  const hasFilterQuery =
    filterQuery.level.length > 0 ||
    filterQuery.tags.length > 0 ||
    filterQuery.creator.length > 0 ||
    filterQuery.language.length > 0;

  // wrapped with useCallback just to bypass the dependency warnings
  const filterMultiTagsLvlCreatorsPayload = useCallback(() => {
    const { creator, language, level, tags } = filterQuery;
    const buildFieldValueArr = [
      { field: "owner_user_id", value: creator },
      { field: "language", value: language },
      { field: "level_id", value: level },
    ];
    const whereClause = buildFieldValueArr.filter(
      (item) => !!item.value.length
    );

    return filterPlaysByMultiTagsLevelLang({ tags, whereClause });
  }, [filterPlaysByMultiTagsLevelLang, filterQuery]);

  // wrapped with useCallback just to bypass the dependency warnings
  const re_filterPlaysBySearchString = useCallback(
    (Obj) => {
      return filterPlaysBySearchString(Obj);
    },
    [filterPlaysBySearchString]
  );

  // wrapped with useCallback just to bypass the dependency warnings
  const fetchPlays = useCallback(async () => {
    setLoading(true);
    try {
      let res = [];
      if (hasSearchTerm) {
        res = await submit(re_filterPlaysBySearchString({ name: searchTerm }));
      } else if (hasFilterQuery) {
        const payload = filterMultiTagsLvlCreatorsPayload();
        res = await submit(payload);
      } else {
        res = await submit(FetchPlaysSimple[0]);
      }
      setPlays(res);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [
    hasSearchTerm,
    hasFilterQuery,
    searchTerm,
    filterMultiTagsLvlCreatorsPayload,
    re_filterPlaysBySearchString,
  ]);

  useEffect(() => {
    fetchPlays();
  }, [fetchPlays]);

  return [loading, error, plays];
};

export default useGetPlays;
