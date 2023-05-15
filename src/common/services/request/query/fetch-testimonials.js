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
    'created_at',
    { user_id_map: ['avatarUrl', 'id', 'displayName'] },
    { testimonials_event: ['id', 'name', 'description'] }
  ],
  orderBy: {
    created_at: 'desc'
  }
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
    'created_at',
    { user_id_map: ['avatarUrl', 'id', 'displayName'] },
    { testimonials_event: ['id', 'name', 'description'] }
  ]
};

export const FetchEvents = {
  disply: 'testimonials',
  name: 'test',
  function: 'testimonials',
  write: false,
  return: [{ testimonials_event: ['id', 'name'] }],
  distinct: 'event'
};

export function FetchtestimonialsHomePage() {
  return { ...FetchFiltered };
}

export function FetchALLtestimonials() {
  return { ...FetchALL };
}

export function FetchALlEvents() {
  return { ...FetchEvents };
}

export const insert_testimonial_submission = (testimonialData) => {
  return {
    display: 'insert_testimonials_one',
    name: 'insert_testimonials_one',
    function: 'insert_testimonials_one',
    write: true,
    object: {
      event: testimonialData.event,
      quote: testimonialData.quote,
      title: testimonialData.title,
      user: testimonialData.id
    },
    return: ['id']
  };
};
