export function FetchPlaysSimple() {
  const env = process.env.NODE_ENV === "development";
  const preview = process.env.REACT_APP_PREVIEW_MODE;
  const payload = { ...BasiFetchParam };
  if (!env && !preview) {
    payload.where = {
      clause: {
        conditions: [
          {
            field: "dev_mode",
            operator: "eq",
            value: false,
          },
        ],
      },
    };
  }
  return payload;
}

export function FetchPlaysByID(id) {
  const env = process.env.NODE_ENV === "development";
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
  const env = process.env.NODE_ENV === "development";
  const payload = { ...BasiFetchParam };

  payload.where = {
    operator: "and",
    clause: [
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
    { level: ["name"] },
    "name",
    "path",
    { play_tags: { tag: ["name"] } },
    "updated_at",
    { user: ["id", "displayName", "avatarUrl"] },
    "video",
  ],
};
