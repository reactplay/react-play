import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from 'common/Testimonial/TestimonialSection';

const HomeTestimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="title-primary">
        What Our{' '}
        <strong>
          <span>Community</span>
        </strong>{' '}
        Says!
      </h2>
      <TestimonialSection />
      <div className="mt-16 text-center">
        <Link className="home-anchor" to="/testimonials">
          <span className="text">View all Testimonials</span>
        </Link>
      </div>
    </section>
  );
};

export default HomeTestimonials;
