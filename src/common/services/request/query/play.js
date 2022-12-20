export const createPlayQuery = {
  display: 'Create Play Tag',
  name: 'Insert_Play_Mutation',
  function: 'insert_plays_one',
  write: true,
  object: {},
  return: ['id']
};

export const associatePlayWithTagQuery = {
  display: 'Associate Play with Tag',
  name: 'Associate_Play_Tag_Mutation',
  function: 'insert_play_tags_one',
  write: true,
  object: {},
  return: ['id']
};
