export const FIELD_TEMPLATE = [
  {
    datafield: 'text',
    type: 'text',
    display: 'Text',
    placeholder: 'Search by name or description',
    dbfield: 'text'
  },
  {
    datafield: 'levels',
    type: 'select',
    display: 'Levels',
    placeholder: 'All Levels',
    fieldValue: 'id',
    fieldName: 'name',
    node: 'level',
    freeSolo: false,
    multiple: true,
    options: [],
    sorted: true,
    dbfield: 'level_id'
  },
  {
    datafield: 'tags',
    type: 'select',
    display: 'Tags',
    placeholder: 'All Tags',
    fieldValue: 'id',
    groupBy: 'type',
    fieldName: 'tag',
    freeSolo: false,
    multiple: true,
    options: [],
    sorted: true
  },
  {
    datafield: 'creators',
    type: 'select',
    display: 'Owners',
    placeholder: 'Owners',
    fieldValue: 'id',
    fieldName: 'displayName',
    avatar: 'avatarUrl',
    node: 'user',
    freeSolo: false,
    multiple: true,
    options: [],
    sorted: true,
    dbfield: 'owner_user_id'
  },
  {
    datafield: 'languages',
    type: 'select',
    display: 'Languages',
    placeholder: 'Languages',
    fieldValue: 'value',
    fieldName: 'name',
    avatar: 'icon',
    freeSolo: false,
    multiple: true,
    options: [],
    dbfield: 'language'
  }
];
