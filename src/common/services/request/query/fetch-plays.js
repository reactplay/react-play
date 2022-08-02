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
