import { FetchALLtestimonials } from 'common/services/request/query/fetch-testimonials';
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';

const Testimonials = () => {
  const [testimonials, setestimonials] = useState([]);

  const fetchtestimonials = async () => {
    const res = await submit(FetchALLtestimonials());
    setestimonials(res);
  };

  useEffect(() => {
    fetchtestimonials();
  }, []);

  console.log(testimonials);

  return (
    <div className="flex flex-wrap p-8  items-center justify-center border space-x-7">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          quote={testimonial.quote}
          title={testimonial.title}
          name={testimonial.user_id_map.displayName}
          avatarUrl={testimonial.user_id_map.avatarUrl}
          codeName={testimonial.testimonials_event.name}
        />
      ))}
    </div>
  );
};

export default Testimonials;
