import { Fetchtestimonials } from 'common/services/request/query/fetch-testimonials';
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import { Carousel } from 'react-responsive-carousel';

const TestimonialSection = () => {
  const [testimonials, setestimonials] = useState([]);
  const fetchnow = async () => {
    const res = await submit(Fetchtestimonials());
    setestimonials(res);
    console.log(res);
  };

  useEffect(() => {
    fetchnow();
  }, []);

  return (
    <>
      <Carousel autoPlay={true}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            title={testimonial.title}
            name={testimonial.user_id_map.displayName}
            avatarUrl={testimonial.user_id_map.avatarUrl}
            codeName={testimonial.event_map.name}
          />
        ))}
      </Carousel>
    </>
  );
};

export default TestimonialSection;
