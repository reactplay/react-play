export const fetchFilterData = {
  getAllTags: {
    display: 'Play Tags',
    name: 'Fetch_Tags',
    function: 'plays',
    write: false,
    return: [{ play_tags: { tag: ['id', 'name'] } }],
    distinct: 'id'
  },
  getAllLevels: {
    display: 'Play Levels',
    name: 'Fetch_Levels',
    function: 'plays',
    write: false,
    return: [{ level: ['id', 'name'] }],
    distinct: 'level_id'
  },

  getAllUsers: {
    display: 'Play Users',
    name: 'Fetch_Users',
    function: 'plays',
    write: false,
    return: [{ user: ['avatarUrl', 'displayName', 'id'] }],
    distinct: 'owner_user_id'
  }
};
