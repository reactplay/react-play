const env = process.env.NODE_ENV === "development"
const preview = process.env.PREVIEW_MODE
const defaultClause = {
  field: "dev_mode",
  operator: "eq",
  value: false,
  type: "boolean",
}

export const FetchPlaysFilter = {
  // Filter all the featured plays
  getAllFeaturedPlays() {
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
        operator: "and",
        clause: [
          defaultClause,
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
  filterPlaysBySearchString(Obj) {
    const payload = {
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
    
    if (!env && !preview) {
      payload.where.clause.push(defaultClause);
    }
    return payload;
  },
  // Filter plays by level, user, language, and multiple tags
  /**
   *
   * @param {object} Obj filterQuery Object
   * @returns payload
   */
  filterPlaysByMultiTagsLevelLang(Obj) {
    const payload = {
      display: "Filter plays by level, user, language, and multiple tags",
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
    };

    const clause = { operator: "and", clause: !env && !preview ? [defaultClause] : [] };
    Object.keys(Obj).forEach((key) => {
      const keyName = Obj[key];
      if (keyName.length > 0) {
        const ifTags = key === "tags";

        const prepareObject = {
          field: ifTags ? "id" : key,
          operator: "eq",
          value: ifTags ? keyName[0] : keyName,
          type: "string",
        };

        if (ifTags) {
          prepareObject.class = "tag";
          prepareObject.node = "play_tags";
        }
        clause.clause.push(prepareObject);
      }
    });

    if (!!clause.clause.length) payload.where = clause;
    return payload;
  },
};
