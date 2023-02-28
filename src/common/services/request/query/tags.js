export const fetchAllTags = {
  display: 'Play Tags',
  name: 'Fetch_Tags',
  function: 'tags',
  return: ['id', 'name']
};

export const createATagQuery = {
  display: 'Create Play Tag',
  name: 'Insert_Tag_Mutation',
  function: 'insert_tags_one',
  write: true,
  object: {},
  return: ['id']
};

export const deleteATagQuery = (obj) => {
  return {
    display: 'Delete Tag',
    name: 'delete_play_tags',
    function: 'delete_play_tags',
    write: true,
    where: {
      clause: {
        operator: 'and',
        conditions: [
          {
            field: 'play_id',
            operator: 'eq',
            value: obj.play_id
          },
          {
            field: 'tag_id',
            operator: 'eq',
            value: obj.tag_id
          }
        ]
      }
    },
    return: ['affected_rows']
  };
};
