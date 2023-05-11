import { submit } from 'common/services/request';

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
    { user_id_map: ['avatarUrl', 'id', 'displayName'] },
    { testimonials_event: ['id', 'name', 'description'] }
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
    { user_id_map: ['avatarUrl', 'id', 'displayName'] },
    { testimonials_event: ['id', 'name', 'description'] }
  ]
};

export function FetchtestimonialsHomePage() {
  return { ...FetchFiltered };
}

export function FetchALLtestimonials() {
  return { ...FetchALL };
}

export const insert_testimonial_submission = () => {
  return {
    display: 'insert_testimonials_one',
    name: 'insert_testimonials_one',
    function: 'insert_testimonials_one',
    write: true,
    object: {
      event: '95063183-6a29-4c34-b08e-10cb306ea29c',
      quote: 'Trying To add a new one',
      title: 'Test',
      user: '16b4be58-d2d5-4ae5-aea0-c439475bb3db'
    },
    return: ['id']
  };
};
