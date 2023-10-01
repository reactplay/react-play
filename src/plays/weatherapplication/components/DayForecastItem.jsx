import React from 'react';

export function DayForecastItem({ day, forecast, forecastIcon, maxTemp, minTemp }) {
  return (
    <div className="flex flex-row gap-4 text-white p-4 bg-gradient-to-tr from-[#3961c3] to-[#212b50] rounded-lg">
      <div className="text-[1.2rem] grow-[6] ">{day}</div>
      <div className="text-[1.2rem] grow">{forecastIcon}</div>
      <div className="text-[1.2rem] grow">{forecast}</div>
      <div className="text-[1.2rem] grow">{maxTemp}˚C</div>
      <div className="text-[1.2rem] grow">{minTemp}˚C</div>
    </div>
  );
}
