import React from 'react';
import { TitleCard } from './TitleCard';
import { TodaysTemperature } from './TodaysTemperature';
import { TodaysWeather } from './TodaysWeather';

export function MainSection({ weatherData }) {
  // console.log(weatherData);
  return (
    <div className=" xl:w-[60vw] flex flex-col gap-8 p-4">
      {weatherData?.location && (
        <TitleCard
          chanceOfRain={weatherData['forecast']['forecastday'][0]['day']['daily_chance_of_rain']}
          icon={weatherData['forecast']['forecastday'][0]['day']['condition']['icon']}
          temp={weatherData['current']['temp_c']}
          title={weatherData['location']['name']}
        />
      )}
      {weatherData?.location && (
        <TodaysTemperature hourlyData={weatherData['forecast']['forecastday'][0]['hour']} />
      )}
      {weatherData?.forecast && <TodaysWeather data={weatherData} />}
    </div>
  );
}
