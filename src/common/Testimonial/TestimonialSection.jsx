import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { fetchTestimonialsHomePage } from 'common/services/request/query/fetch-testimonials';
import { submit } from 'common/services/request';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper';

function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await submit(fetchTestimonialsHomePage());
    setTestimonials(res);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="mx-10 lg:mx-20 mt-16 sm:mt-20">
        <Swiper
          rewind
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          keyboard={{
            enabled: true
          }}
          modules={[Keyboard, Autoplay, Navigation, Pagination]}
          pagination={{
            clickable: true
          }}
          slidesPerView={1}
          spaceBetween={10}
        >
          {testimonials &&
            testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex rounded-lg border-2 border-gray-400 shadow-lg">
                  <TestimonialCard
                    home
                    avatarUrl={testimonial.user_id_map.avatarUrl}
                    category={testimonial.testimonials_event.name}
                    created_at={testimonial.created_at}
                    email={testimonial.user_id_map.email}
                    name={testimonial.user_id_map.displayName}
                    quote={testimonial.quote}
                    title={testimonial.title}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default TestimonialSection;
