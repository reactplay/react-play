export function FetchPlaysSimple() {
  const env = process.env.NODE_ENV === "development";
  const preview = process.env.PREVIEW_MODE
  const payload = {
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
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
  };

  if (!env && !preview) {
    payload.where = {
      clause: [
        {
          field: "dev_mode",
          operator: "eq",
          value: false,
          type: "boolean",
        },
      ],
    };
  }
  return payload;
}
