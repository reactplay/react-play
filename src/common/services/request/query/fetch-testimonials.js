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
    { user_id_map: ['avatarUrl', 'id', 'displayName', 'email'] },
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
    { user_id_map: ['avatarUrl', 'id', 'displayName', 'email'] },
    { testimonials_event: ['id', 'name', 'description'] }
  ],
  orderBy: {
    created_at: 'desc'
  }
};

export const FetchALLWithLimit = (limit) => {
  return {
    display: 'testimonials',
    name: 'test',
    function: 'testimonials',
    write: false,
    return: [
      'id',
      'quote',
      'title',
      'created_at',
      { user_id_map: ['avatarUrl', 'id', 'displayName', 'email'] },
      { testimonials_event: ['id', 'name', 'description'] }
    ],
    orderBy: {
      created_at: 'desc'
    },
    offset: 0,
    limit: limit
  };
};

export const FetchEvents = {
  disply: 'hackathon_events',
  name: 'test',
  function: 'hackathon_events',
  write: false,
  return: ['name', 'id']
};

export function FetchTestimonialsHomePage() {
  return { ...FetchFiltered };
}

export function FetchALLtestimonialsWithLimit(limit) {
  return { ...FetchALLWithLimit(limit) };
}

export function FetchALlEvents() {
  return { ...FetchEvents };
}

export function FetchALLtestimonials() {
  return { ...FetchALL };
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
