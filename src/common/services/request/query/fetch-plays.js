export function FetchPlaysSimple() {
  return {...BasiFetchParam}
}

export function FetchPlaysByID(id) {
  const payload = { ...BasiFetchParam };

  payload.where = {
    clause: [
      {
        field: "id",
        operator: "eq",
        value: id,
        type: "string",
      },
    ],
  };
  return payload;
}

const BasiFetchParam = {
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
    "dev_mode",
    "github",
    "id",
    "language",
    { play_like: ["play_id", "user_id"] },
    { level: ["name"] },
    "name",
    "path",
    { play_tags: { tag: ["name"] } },
    "updated_at",
    { user: ["id", "displayName", "avatarUrl"] },
    "video",
  ],
};
