import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import { Carousel } from 'react-responsive-carousel';
import { FetchtestimonialsHomePage } from 'common/services/request/query/fetch-testimonials';
import { Link } from 'react-router-dom';

const TestimonialSection = () => {
  const [testimonials, setestimonials] = useState([]);
  const fetchtestimonials = async () => {
    const res = await submit(FetchtestimonialsHomePage());
    setestimonials(res);
  };

  useEffect(() => {
    fetchtestimonials();
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
      <div className="flex justify-center items-center ">
        <button className="text-blue-500 underline underline-offset-1">
          <Link to="/testimonials">show all testimonials</Link>
        </button>
      </div>
    </>
  );
};

export default TestimonialSection;
