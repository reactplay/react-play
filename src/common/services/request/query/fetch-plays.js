export function FetchPlaysSimple() {
  return { ...BasiFetchParam };
}

export function FetchPlaysByID(id) {
  const payload = { ...DetailedFetchParam };

  payload.where = {
    clause: {
      conditions: [
        {
          field: "id",
          operator: "eq",
          value: id,
        },
      ],
    },
  };
  return payload;
}

export function FetchPlaysBySlugAndUser(playslug, username) {
  const payload = { ...DetailedFetchParam };

  payload.where = {
    clause: {
      operator: "and",
      conditions: [
        {
          field: "slug",
          operator: "ilike",
          value: playslug,
          type: "string",
        },
        {
          field: "github",
          operator: "ilike",
          value: username,
          type: "string",
        },
      ],
    },
  };
  return payload;
}

const BasiFetchParam = {
  display: "Simple fetch play",
  name: "Fetch_Plays",
  function: "plays",
  write: false,
  return: [
    "component",
    "cover",
    "description",
    "featured",
    "dev_mode",
    "github",
    "language",
    { play_like: ["liked", "play_id", "user_id"] },
    "name",
    "slug",
    { user: ["id", "displayName", "avatarUrl"] },
  ],
};

const DetailedFetchParam = {
  ...BasiFetchParam,
  ...{
    return: [
      ...BasiFetchParam.return,
      "blog",
      "id",
      { level: ["name"] },
      "video",
      { play_tags: { tag: ["name"] } },
    ],
  },
};
