export const FetchPlaysSorted = [
  {
    display: 'Sorted play view',
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
    orders: [
      {
        field: 'created_at',
        value: 'asc'
      }
    ]
  }
];
