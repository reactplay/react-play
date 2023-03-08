export function FetchPlaysSimple() {
  return { ...BasiFetchParam };
}

export function FetchPlaysByID(id) {
  const payload = { ...DetailedFetchParam };

  payload.where = {
    clause: {
      conditions: [
        {
          field: 'id',
          operator: 'eq',
          value: id
        }
      ]
    }
  };

  return payload;
}

export function FetchPlaysBySlugAndUser(playslug, username) {
  const payload = { ...DetailedFetchParam };

  payload.where = {
    clause: {
      operator: 'and',
      conditions: [
        {
          field: 'slug',
          operator: 'ilike',
          value: playslug,
          type: 'string'
        },
        {
          field: 'github',
          operator: 'ilike',
          value: username,
          type: 'string'
        }
      ]
    }
  };

  return payload;
}

export function FetchPlaysByFilter(where_clause) {
  const payload = { ...BasiFetchParam };
  if (where_clause) {
    payload.where = where_clause;
  }

  return payload;
}

export const BasiFetchParam = {
  display: 'Simple fetch play',
  name: 'Fetch_Plays',
  function: 'plays',
  write: false,
  return: [
    'component',
    'cover',
    'description',
    'featured',
    'dev_mode',
    'github',
    'language',
    { play_like: ['liked', 'play_id', 'user_id'] },
    'name',
    'slug',
    { user: ['id', 'displayName', 'avatarUrl', 'email'] },
    'created_at',
    { play_tags: ['tag_id'] }
  ],
  orderBy: {
    created_at: 'desc'
  }
};

export const DetailedFetchParam = {
  ...BasiFetchParam,
  ...{
    return: [
      ...BasiFetchParam.return,
      'path',
      'blog',
      'id',
      { level: ['name'] },
      'video',
      { play_tags: { tag: ['name'] } }
    ]
  }
};
