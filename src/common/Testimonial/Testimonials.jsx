import { FetchALLtestimonials } from 'common/services/request/query/fetch-testimonials';
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import './Testimonial.css';
import { IoAddSharp } from 'react-icons/io5';
import { useAuthenticated } from '@nhost/react';
import TestimonialModal from './TestimonialModal';
import { NHOST } from 'common/const';

const Testimonials = () => {
  const [testimonials, setestimonials] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const isAuthenticated = useAuthenticated();

  const fetchtestimonials = async () => {
    const res = await submit(FetchALLtestimonials());
    setestimonials(res);
  };

  const handleLogin = (value) => {
    return (window.location = NHOST.AUTH_URL(window.location.href, value));
  };

  const onAddTestimonial = async () => {
    if (!isAuthenticated) return handleLogin('github');
    setisOpen(!isOpen);
  };

  useEffect(() => {
    fetchtestimonials();
  }, [!isOpen]);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex justify-center items-center h-52">
        <h2 className="testimonial-title-primary">
          What Our{' '}
          <strong>
            <span>Community</span>
          </strong>{' '}
          Says!
        </h2>
      </div>
      <div className="flex p-3 justify-end">
        <button
          type="button"
          className="px-4 py-3  bg-[#00f2fe] rounded-lg text-black outline-none  shadow-lg transform   mx-5 flex justify-center items-center"
          onClick={onAddTestimonial}
        >
          <IoAddSharp className="icon" />
          <span className="ml-2">Add Testimonial</span>
        </button>
      </div>
      <div>{isOpen && <TestimonialModal isOpen={isOpen} setisOpen={setisOpen} />}</div>
      <div className="flex  p-8  flex-wrap justify-center items-center md:space-x-7">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            title={testimonial.title}
            name={testimonial.user_id_map.displayName}
            avatarUrl={testimonial.user_id_map.avatarUrl}
            codeName={testimonial.testimonials_event.name}
            created_at={testimonial.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
