import { BasiFetchParam } from './fetch-plays';

const defaultClause = {
  field: 'dev_mode',
  operator: 'eq',
  value: false,
  type: 'boolean'
};

function createObjectPayload(items, key, ifTags) {
  const obj = {};
  if (items.length > 1) {
    obj.clause = {
      operator: 'or',
      conditions: []
    };
    if (ifTags) {
      obj.clause.class = 'play_tags';
    }
    items.forEach((item) => {
      const prepareObject = {
        field: ifTags ? 'tag_id' : key,
        operator: 'eq',
        value: item
      };
      obj.clause.conditions.push(prepareObject);
    });

    return { ...obj };
  }

  return {
    field: ifTags ? 'tag_id' : key,
    operator: 'eq',
    value: items[0]
  };
}

export const FetchPlaysFilter = {
  // Filter all the featured plays
  getAllFeaturedPlays() {
    return {
      ...BasiFetchParam,
      ...{
        display: 'Filter all the featured plays',
        where: {
          clause: {
            operator: 'and',
            conditions: [
              defaultClause,
              {
                field: 'featured',
                operator: 'eq',
                value: true
              }
            ]
          }
        }
      }
    };
  },
  // Filter Plays by a search string in name or description
  filterPlaysBySearchString(Obj) {
    return {
      ...BasiFetchParam,
      ...{
        display: 'Filter Plays by a search string in name or description',

        where: {
          clause: {
            operator: 'or',
            conditions: [
              {
                field: 'name',
                operator: 'iregex',
                value: Obj.name.toLowerCase()
              },
              {
                field: 'description',
                operator: 'iregex',
                value: Obj.name.toLowerCase()
              }
            ]
          }
        }
      }
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
        display: 'Filter plays by level, user, language, and multiple tags'
      }
    };

    const clause = {
      operator: 'and',
      conditions: []
    };

    if (Obj) {
      Object.keys(Obj).forEach((key) => {
        const filterItem = Obj[key];
        if (filterItem.length > 0 && filterItem[0] !== ' ') {
          const ifTags = key === 'tags';
          const prepareObject = createObjectPayload(filterItem, key, ifTags);
          if (ifTags && filterItem.length === 1) {
            prepareObject.class = 'play_tags';
          }
          clause.conditions.push(prepareObject);
        }
      });
    }

    if (clause.conditions.length) {
      payload.where = payload.where || {};
      payload.where.clause = clause;
    }

    return payload;
  }
};
