import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import { Carousel } from 'react-responsive-carousel';
import { FetchTestimonialsHomePage } from 'common/services/request/query/fetch-testimonials';
import { Link } from 'react-router-dom';
import './Testimonial.css';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await submit(FetchTestimonialsHomePage());
    setTestimonials(res);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      <Carousel autoPlay showArrows showStatus={false} showThumbs={false}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            avatarUrl={testimonial.user_id_map.avatarUrl}
            codeName={testimonial.testimonials_event.name}
            created_at={testimonial.created_at}
            email={testimonial.user_id_map.email}
            key={testimonial.id}
            name={testimonial.user_id_map.displayName}
            quote={testimonial.quote}
            title={testimonial.title}
          />
        ))}
      </Carousel>
      <div className="testimonial-footer">
        <Link className="testimonial-anchor" to="/testimonials">
          <span className="text">View all Testimonials</span>
        </Link>
      </div>
    </>
  );
};

export default TestimonialSection;
