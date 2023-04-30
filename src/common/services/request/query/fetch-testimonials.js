export const FetchFiltered = {
  display: 'testimonials',
  name: 'test',
  function: 'testimonials',
  write: false,
  limit: 4,
  return: [
    'id',
    'quote',
    'title',
    'user',
    { user_id_map: ['avatarUrl', 'displayName'] },
    { event_map: ['code_name', 'name', 'description'] }
  ]
};

export const FetchALL = {
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

export function FetchtestimonialsHomePage() {
  return { ...FetchFiltered };
}

export function FetchALLtestimonials() {
  return { ...FetchALL };
}
