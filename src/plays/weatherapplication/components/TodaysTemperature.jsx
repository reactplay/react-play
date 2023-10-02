import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { HourlyTemperatureCard } from './HourlyTemperatureCard';

export function TodaysTemperature({ hourlyData }) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  function getCurrentWidth() {
    return window.innerWidth;
  }

  function getSlidesToView(widthScreen) {
    if (widthScreen < 640) {
      return 2;
    } else if (widthScreen >= 640 && widthScreen < 1280) {
      return 3;
    } else {
      return 4;
    }
  }

  useEffect(
    function setCurrentWidth() {
      function updateWidth() {
        setWidthScreen(getCurrentWidth());
      }
      window.addEventListener('resize', updateWidth);

      return function removeDimension() {
        window.removeEventListener('resize', updateWidth);
      };
    },
    [widthScreen]
  );

  return (
    <div className="flex justify-center items-center gap-4">
      <Swiper
        className="grid grid-cols-3  gap-10  px-20 justify-center items-center"
        id="course-swiper"
        slidesPerView={getSlidesToView(widthScreen)}
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
