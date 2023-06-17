import { fetchAllTestimonials } from 'common/services/request/query/testimonials';
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import { IoAddSharp } from 'react-icons/io5';
import { useAuthenticated } from '@nhost/react';
import TestimonialModal from './TestimonialModal';
import { NHOST } from 'common/const';
import './Testimonial.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const isAuthenticated = useAuthenticated();

  const fetchTestimonials = async () => {
    const res = await submit(fetchAllTestimonials());
    setTestimonials(res);
  };

  const handleLogin = (value) => {
    return (window.location = NHOST.AUTH_URL(window.location.href, value));
  };

  const onAddTestimonial = async () => {
    if (!isAuthenticated) return handleLogin('github');
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchTestimonials();
  }, [!isOpen]);

  return (
    <section className="mt-24">
      <h2 className="testimonial-title-primary">
        What Our{' '}
        <strong>
          <span className="underline decoration-[#00f2fe]">Community</span>
        </strong>{' '}
        Says!
      </h2>

      <div className="flex p-3 justify-end max-w-[1600px] mx-auto">
        <button
          className="px-2.5 py-2 sm:px-4 sm:py-3 bg-[#00f2fe] rounded-lg text-black outline-none  shadow-lg transform mx-5 flex justify-center items-center"
          type="button"
          onClick={onAddTestimonial}
        >
          <IoAddSharp className="icon h-5 w-5 sm:h-6 sm:w-6" />
          <span className="ml-1 sm:ml-2 md:text-lg">Testimonial</span>
        </button>
      </div>

      <div>{isOpen && <TestimonialModal isOpen={isOpen} setIsOpen={setIsOpen} />}</div>

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {testimonials &&
            testimonials.map((testimonial) => (
              <div className="border rounded-lg" key={testimonial.id}>
                <TestimonialCard
                  avatarUrl={testimonial.user_id_map.avatarUrl}
                  category={testimonial.testimonials_event.name}
                  created_at={testimonial.created_at}
                  email={testimonial.user_id_map.email}
                  name={testimonial.user_id_map.displayName}
                  quote={testimonial.quote}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
