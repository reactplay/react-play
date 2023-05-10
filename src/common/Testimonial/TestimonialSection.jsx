import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { submit } from 'common/services/request';
import { Carousel } from 'react-responsive-carousel';
import { FetchtestimonialsHomePage, insert_testimonial_submission} from 'common/services/request/query/fetch-testimonials';
import { Link } from 'react-router-dom';
import { useAuthenticated, useUserData } from '@nhost/react';
import { NHOST } from 'common/const';
import TestimonialModal from './TestimonialModal';

const TestimonialSection = () => {
  const [testimonials, setestimonials] = useState([]);
  const [isOpen , setisOpen] = useState(false);
  const isAuthenticated = useAuthenticated();
  console.log(isAuthenticated);
  const user = useUserData();
  console.log(user);

  const fetchtestimonials = async () => {
    const res = await submit(FetchtestimonialsHomePage());
    setestimonials(res);
  };

  const handleLogin = (value) => {
       return (window.location = NHOST.AUTH_URL(window.location.href, value));
  };

  const  onAddTestimonial = async () => {
    console.log('clicked');

    if(!isAuthenticated) return handleLogin('github');
    setisOpen(!isOpen);

    /* return await Promise.all([
      submit(insert_testimonial_submission()),
    ]).catch((err) => Promise.reject(err)); */
  } 

  console.log(testimonials);

  
  useEffect(() => {
    fetchtestimonials();
  }, []);

  return (
    <>
      <div>
         <button type="" onClick={onAddTestimonial}>Add Testimonial</button>
      </div>
      <div>
        {isOpen && (
           <TestimonialModal  isOpen={isOpen} setisOpen={setisOpen}/> 
        )}   
      </div>
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
