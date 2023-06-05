import {
  FetchALLtestimonials,
  FetchALLtestimonialsWithLimit
} from 'common/services/request/query/fetch-testimonials';
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import './Testimonial.css';
import { IoAddSharp } from 'react-icons/io5';
import { useAuthenticated } from '@nhost/react';
import TestimonialModal from './TestimonialModal';
import { NHOST } from 'common/const';

import useInfiniteScroll from 'react-infinite-scroll-hook';

const Testimonials = () => {
  const [testimonials, setestimonials] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [testimonialength, setestimonialength] = useState(0);

  const isAuthenticated = useAuthenticated();
  const [loading, setloading] = useState(false);

  const [hasNextPage, sethasNextPage] = useState(true);

  const fetchtestimonials = async () => {
    const res = await submit(FetchALLtestimonials());
    setestimonialength(res.length);
  };

  const fetchwithlimit = async () => {
    const res = await submit(FetchALLtestimonialsWithLimit(testimonials.length + 1));
    setestimonials(res);
    if (testimonials.length == testimonialength) {
      setloading(false);
      sethasNextPage(false);
    }
  };
  const handleLogin = (value) => {
    return (window.location = NHOST.AUTH_URL(window.location.href, value));
  };

  const onAddTestimonial = async () => {
    if (!isAuthenticated) return handleLogin('github');
    setisOpen(!isOpen);
  };

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: fetchwithlimit,
    rootMargin: '0px 0px 400px 0px'
  });

  useEffect(() => {
    fetchtestimonials();
  }, []);

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
          className="px-4 py-3 bg-[#00f2fe] rounded-lg text-black outline-none  shadow-lg transform   mx-5 flex justify-center items-center"
          type="button"
          onClick={onAddTestimonial}
        >
          <IoAddSharp className="icon" />
          <span className="ml-2">Add Testimonial</span>
        </button>
      </div>
      <div>{isOpen && <TestimonialModal isOpen={isOpen} setIsOpen={setisOpen} />}</div>
      <div className="h-screen overflow-y-scroll overflow-x-hidden" ref={rootRef}>
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
        {(loading || hasNextPage) && (
          <div ref={sentryRef}>
            <p>Loading....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
