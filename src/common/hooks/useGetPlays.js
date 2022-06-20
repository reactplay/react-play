import { useState, useEffect, useContext } from "react";
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
  console.log(filterQuery)
  const fetchPlayPayload = {
    display: "Simple fetch play",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
  };

  const searchPlayPayload = {
    display: "Filter Plays by a search string in name or description",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "or",
      clause: [
        {
          field: "name",
          operator: "iregex",
          value: "why",
          type: "string",
        },
        {
          field: "description",
          operator: "iregex",
          value: "why",
          type: "string",
        },
      ],
    },
  };

  const filterPlayPayload = {
    display: "Filter plays by level, user, language, and multiple tags",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      {
        play_tags: { tag: ["name"] },
        where: {
          operator: "or",
          class: "tag",
          clause: [
            {
              field: "id",
              operator: "eq",
              value: "914e9491-b1f6-4b90-ad0f-727eabd5a41e",
              type: "string",
            },
          ],
        },
      },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "and",
      clause: [
        {
          field: "owner_user_id",
          operator: "eq",
          value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
          type: "string",
        },
        {
          field: "level_id",
          operator: "eq",
          value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
          type: "string",
        },
        {
          field: "language",
          operator: "eq",
          value: "js",
          type: "string",
        },
      ],
    },
  };

  const filterMultiTagsPayload = () => {
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
  };

  useEffect(() => {
    const fetchPlays = async () => {
      setLoading(true);
      try {
        let res = [];
        if (hasSearchTerm) {
          res = await submit(filterPlaysBySearchString({ name: searchTerm }));
        } else if (hasFilterQuery) {
          res = await submit(filterMultiTagsPayload());
        } else {
          res = await submit(FetchPlaysSimple[0]);
        }
        setPlays(res);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchPlays();
  }, [hasSearchTerm, hasFilterQuery]);

  return [loading, error, plays];
};

export default useGetPlays;
