export function FetchPlaysSimple() {
  return {...BasiFetchParam}
}

export function FetchPlaysByID(id) {
  const payload = { ...BasiFetchParam };

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

export function FetchPlaysByNameAndUser(playname, username) {
  const payload = { ...BasiFetchParam };

  payload.where = {
    clause: {
      operator: "and",
      conditions: [
        {
          field: "name",
          operator: "eq",
          value: playname,
          type: "string",
        },
        {
          field: "github",
          operator: "eq",
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
    "blog",
    "component",
    "cover",
    "created_at",
    "description",
    "featured",
    "dev_mode",
    "github",
    "id",
    "language",
    { play_like: ["liked", "play_id", "user_id"] },
    { level: ["name"] },
    "name",
    "path",
    { play_tags: { tag: ["name"] } },
    "updated_at",
    { user: ["id", "displayName", "avatarUrl"] },
    "video",
  ],
};
