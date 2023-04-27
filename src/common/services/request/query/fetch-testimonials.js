export const BasiFetchParam = {
  display: 'testimonials',
  name: 'test',
  function: 'testimonials',
  write: false,
  return: [
    'id',
    'quote',
    'title',
    'user',
    { user_id_map: ['avatarUrl', 'displayName'] },
    { event_map: ['code_name', 'name', 'description'] }
  ]
};

export function Fetchtestimonials() {
  return { ...BasiFetchParam };
}
