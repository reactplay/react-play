import { useState, useEffect, useContext, useCallback } from "react";
import { SearchContext } from "common/search/search-context";
import { FetchPlaysFilter } from "common/services/request/query/fetch-plays-filter";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

import { submit } from "common/services/request";

/**
 * Run graphql query to filter plays
 * @returns [loading, error, plays]
 */

const dummy = {
  "blog": "",
  "component": "DEMO",
  "cover": "",
  "created_at": "2022-06-08T10:14:31.440738+00:00",
  "description": "DEMO",
  "featured": false,
  "dev_mode": true,
  "github": "Angryman18",
  "id": "4b7c0822-9e05-4195-a59b-68f4fe834c96",
  "language": "js",
  "level": {
      "name": "Intermediate"
  },
  "name": "DEMO",
  "path": "/plays/demo",
  "play_tags": [
      {
          "tag": {
              "name": "JSX"
          }
      },
      {
          "tag": {
              "name": "Hooks"
          }
      },
      {
          "tag": {
              "name": "TypeScript"
          }
      }
  ],
  "updated_at": "2022-06-17T09:24:48.58247+00:00",
  "user": {
      "id": "f489e687-f42f-4226-9cca-97238146bd159",
      "displayName": "Demo",
      "avatarUrl": ""
  },
  "video": ""
}

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

  const re_filterPlaysByMultiTagsLevelLang = useCallback((filterQuery) => {
    const callIt = filterPlaysByMultiTagsLevelLang(filterQuery)
    return callIt
  },[filterPlaysByMultiTagsLevelLang])

  const re_filterPlaysBySearchString = useCallback(
    (Obj) => {
      return filterPlaysBySearchString(Obj);
    },
    [filterPlaysBySearchString]
  );

  const fetchPlays = useCallback(async () => {
    setLoading(true);
    try {
      let res = [];
      if (hasSearchTerm) {
        res = await submit(re_filterPlaysBySearchString({ name: searchTerm }));
      } else if (hasFilterQuery) {
        const payload = re_filterPlaysByMultiTagsLevelLang(filterQuery);
        res = await submit(payload);
      } else {
        res = await submit(FetchPlaysSimple());
      }
      setPlays([...res, dummy]);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [
    hasSearchTerm,
    hasFilterQuery,
    searchTerm,
    filterQuery,
    re_filterPlaysBySearchString,
    re_filterPlaysByMultiTagsLevelLang
  ]);

  useEffect(() => {
    fetchPlays();
  }, [fetchPlays]);

  return [loading, error, plays];
};

export default useGetPlays;
