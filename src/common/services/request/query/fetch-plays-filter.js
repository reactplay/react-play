export const FetchPlaysFilter = {
  // Filter all the featured plays
  getAllFeaturedPlays: () => {
    return {
      display: "Filter all the featured plays",
      name: "Fetch_Plays",
      function: "plays",
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
        operator: "",
        clause: [
          {
            field: "featured",
            operator: "eq",
            value: true,
            type: "boolean",
          },
        ],
      },
    };
  },
  // Filter Plays by a search string in name or description
  filterPlaysBySearchString: (Obj) => {
    return {
      display: "Filter Plays by a search string in name or description",
      name: "Fetch_Plays",
      function: "plays",
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
            value: Obj.name,
            type: "string",
          },
          {
            field: "description",
            operator: "iregex",
            value: Obj.name,
            type: "string",
          },
        ],
      },
    };
  },
  // Filter Plays by Level
  filterPlaysByLevels: () => {
    return {
      display: "Filter Plays by Level",
      name: "Fetch_Plays",
      function: "plays",
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
        operator: "",
        class: "level",
        clause: [
          {
            field: "name",
            operator: "eq",
            value: "Advanced",
            type: "string",
          },
        ],
      },
    };
  },
  // Alternatively using the id
  filterPlayById: {
    display: "Alternatively using the id",
    name: "Fetch_Plays",
    function: "plays",
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
      operator: "",
      clause: [
        {
          field: "level_id",
          operator: "eq",
          value: "2af38a32-37a7-4456-b21b-bf6b3aedd804",
          type: "string",
        },
      ],
    },
  },
  // Filter plays by level, user and language
  filterPlaysByLevelTagLang: (Obj) => {
    return {
      display: "Filter plays by level, user and language",
      name: "Fetch_Plays",
      function: "plays",
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
            value: Obj.owner_user_id,
            type: "string",
          },
          {
            field: "level_id",
            operator: "eq",
            value: Obj.level_id,
            type: "string",
          },
          {
            field: "language",
            operator: "eq",
            value: Obj.language,
            type: "string",
          },
        ],
      },
    };
  },
  // Filter plays by level, user, language, and multiple tags
  /**
   *
   * @param {object} Obj filterQuery Object
   * @returns payload
   */
  filterPlaysByMultiTagsLevelLang: (Obj) => {
    const payload = {
      display: "Filter plays by level, user, language, and multiple tags",
      name: "Fetch_Plays",
      function: "plays",
      params: [
        !!Obj?.tags.length
          ? {
              play_tags: { tag: ["name"] },
              where: {
                operator: "or",
                class: "tag",
                clause: Obj?.tags?.map((item) => ({
                  field: "id",
                  operator: "eq",
                  value: item,
                  type: "string",
                })),
              },
            }
          : { play_tags: { tag: ["name"] } },
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
        "updated_at",
        { user: ["id", "displayName", "avatarUrl"] },
        "video",
      ],
    };

    const { tags, ...rest } = Obj;
    const clause = { operator: "and", clause: [] };
    Object.keys(rest).forEach((key) => {
      if (rest[key].length > 0) {
        clause.clause.push({
          field: key,
          operator: "eq",
          value: rest[key],
          type: "string",
        });
      }
    });

    if (!!clause.clause.length) payload.where = clause;
    return payload;
  },
};
