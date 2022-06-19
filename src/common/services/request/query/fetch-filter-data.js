export const fetchFilterData = {
  getAllTags: {
    display: "Play Tags",
    name: "Fetch_Tags",
    function: "plays",
    write: false,
    params: [{ play_tags: { tag: ["id", "name"] } }],
    filters: [
      {
        field: "distinct_on",
        value: "id",
      },
    ],
  },
  getAllLevels: {
    display: "Play Levels",
    name: "Fetch_Levels",
    function: "plays",
    write: false,
    params: [{ level: ["id", "name"] }],
    filters: [
      {
        field: "distinct_on",
        value: "level_id",
      },
    ],
  },

  getAllUsers: {
    display: "Play Users",
    name: "Fetch_Users",
    function: "plays",
    write: false,
    params: [{ user: ["avatarUrl", "displayName", "id"] }],
    filters: [
      {
        field: "distinct_on",
        value: "owner_user_id",
      },
    ],
  },
};
