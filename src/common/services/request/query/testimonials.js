export const fetchFiltered = {
  display: 'testimonials',
  name: 'test',
  function: 'testimonials',
  write: false,
  limit: 9,
  where: {
    clause: {
      conditions: [
        {
          field: 'moderated',
          operator: 'eq',
          value: true,
          type: 'boolean'
        }
      ]
    }
  },
  return: [
    'id',
    'quote',
    'created_at',
    { user_id_map: ['avatarUrl', 'id', 'displayName', 'email'] },
    { testimonials_event: ['id', 'name', 'description'] }
  ],
  orderBy: {
    created_at: 'desc'
  }
};

export function fetchTestimonialsHomePage() {
  return { ...fetchFiltered };
}

export const fetchAll = {
  display: 'testimonials',
  name: 'test',
  function: 'testimonials',
  write: false,
  where: {
    clause: {
      conditions: [
        {
          field: 'moderated',
          operator: 'eq',
          value: true,
          type: 'boolean'
        }
      ]
    }
  },

  return: [
    'id',
    'quote',
    'created_at',
    { user_id_map: ['avatarUrl', 'id', 'displayName', 'email'] },
    { testimonials_event: ['id', 'name', 'description'] }
  ],
  orderBy: {
    created_at: 'desc'
  }
};

export function fetchAllTestimonials() {
  return { ...fetchAll };
}

export const fetchAllWithLimit = (limit) => {
  return {
    display: 'testimonials',
    name: 'test',
    function: 'testimonials',
    write: false,
    return: [
      'id',
      'quote',
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

export function FetchALLtestimonialsWithLimit(limit) {
  return { ...fetchAllWithLimit(limit) };
}

export const fetchCategories = {
  display: 'hackathon_events',
  name: 'test',
  function: 'hackathon_events',
  write: false,
  return: ['name', 'id']
};

export function fetchAllCategories() {
  return { ...fetchCategories };
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
      user: testimonialData.id,
      moderated: false
    },
    return: ['id']
  };
};
