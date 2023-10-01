import React from 'react';
import { WeatherImage } from './WeatherImage';

export function HourlyTemperatureCard({ time, icon, temperature }) {
  return (
    <div className="flex flex-col bg-gradient-to-tr from-[#3961c3] to-[#212b50]  text-white py-4 px-8 rounded-lg justify-center items-center">
      <div className="pb-4 text-xl ">{hourToNumber(time) < 1200 ? time + ' AM' : time + ' PM'}</div>
      <div className="p-4">
        <WeatherImage size="medium" url={icon} />
      </div>
      <div className="py-2 font-bold text-xl">{temperature} &deg;C</div>
    </div>
  );

  function hourToNumber(hour) {
    let res = Number(hour.replace(':', ''));

    return res;
  }
}
