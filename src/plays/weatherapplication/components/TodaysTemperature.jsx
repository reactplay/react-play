import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { HourlyTemperatureCard } from './HourlyTemperatureCard';

export function TodaysTemperature({ hourlyData }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <Swiper
        className="grid grid-cols-3  gap-10  px-20 justify-center items-center"
        id="course-swiper"
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={16}
      >
        {hourlyData?.map((hourData) => (
          <SwiperSlide
            className="flex  flex-col justify-center items-center text-black  pb-10  "
            key={hourData['time']}
          >
            <HourlyTemperatureCard
              icon={hourData['condition']['icon']}
              temperature={hourData['temp_c']}
              time={hourData['time'].substring(10)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
