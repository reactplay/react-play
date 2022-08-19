import { BasiFetchParam } from "./fetch-plays";

const env = process.env.NODE_ENV === "development";
const preview = process.env.REACT_APP_PREVIEW_MODE;
const defaultClause = {
  field: "dev_mode",
  operator: "eq",
  value: false,
  type: "boolean",
};

export const FetchPlaysFilter = {
  // Filter all the featured plays
  getAllFeaturedPlays() {
    return {
      ...BasiFetchParam,
      ...{
        display: "Filter all the featured plays",
        where: {
          clause: {
            operator: "and",
            conditions: [
              defaultClause,
              {
                field: "featured",
                operator: "eq",
                value: true,
              },
            ],
          },
        },
      },
    };
  },
  // Filter Plays by a search string in name or description
  filterPlaysBySearchString(Obj) {
    return {
      ...BasiFetchParam,
      ...{
        display: "Filter Plays by a search string in name or description",

        where: {
          clause: {
            operator: "or",
            conditions: [
              {
                field: "name",
                operator: "iregex",
                value: Obj.name.toLowerCase(),
              },
              {
                field: "description",
                operator: "iregex",
                value: Obj.name.toLowerCase(),
              },
            ],
          },
        },
      },
    };
  },
  // Filter plays by level, user, language, and multiple tags
  /**
   *
   * @param {object} Obj filterQuery Object
   * @returns payload
   */
  filterPlaysByMultiTagsLevelLang(Obj) {
    const payload = {
      ...BasiFetchParam,
      ...{
        display: "Filter plays by level, user, language, and multiple tags",
      },
    };

    const clause = {
      operator: "and",
      conditions: !env && !preview ? [defaultClause] : [],
    };
    Object.keys(Obj).forEach((key) => {
      const keyName = Obj[key];
      if (keyName.length > 0) {
        const ifTags = key === "tags";

        const prepareObject = {
          field: ifTags ? "tag_id" : key,
          operator: "eq",
          value: ifTags ? keyName[0] : keyName,
        };

        if (ifTags) {
          clause.class = "play_tags";
        }
        clause.conditions.push(prepareObject);
      }
    });

    if (!!clause.conditions.length) {
      payload.where = payload.where || {};
      payload.where.clause = clause;
    }
    return payload;
  },
};
