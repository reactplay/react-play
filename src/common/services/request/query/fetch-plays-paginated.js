export const FetchPlaysPaginated = [
  {
    display: 'Paginated play view',
    name: 'Fetch_Plays',
    function: 'plays',
    write: false,
    params: [
      'blog',
      'component',
      'cover',
      'created_at',
      'description',
      'featured',
      'github',
      'id',
      'language',
      { level: ['name'] },
      'name',
      'path',
      { play_tags: { tag: ['name'] } },
      'updated_at',
      { user: ['id', 'displayName', 'avatarUrl'] },
      'video'
    ],
    where: {
      operator: '',
      clause: [
        {
          field: 'featured',
          operator: 'eq',
          value: true,
          type: 'boolean'
        }
      ]
    },
    filters: [
      {
        field: 'offset',
        value: 1
      },
      {
        field: 'limit',
        value: 4
      }
    ]
  }
];
