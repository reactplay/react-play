export const fetchAllTags = {
  display: "Play Tags",
  name: "Fetch_Tags",
  function: "tags",
  params: ["id", "name"],
};

export const createATagQuery = {
  display: "Create Play Tag",
  name: "Insert_Tag_Mutation",
  function: "insert_tags_one",
  write: true,
  object: {},
};
