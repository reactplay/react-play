import React, { useEffect, useState } from 'react';
import { DayForecastItem } from './DayForecastItem';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const API_KEY = '7c2e570aa4d54b9ab9290109232809';

export function SevenDayForecast({ city }) {
  const [weeklyForecastData, setWeeklyForecastData] = useState(undefined);
  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('weeklyForecast: ', responseJson);
        setWeeklyForecastData(responseJson);
      });
  }, []);

  const day = new Date().getDay();
  const sevenDays = days.slice((days.indexOf(day), days.indexOf(day) + 7));
  sevenDays[0] = 'Today';

  function getForecast(forecast) {
    if (forecast.indexOf('rain') != -1) {
      return 'Rainy';
    } else if (forecast.toLowerCase().indexOf('sun')) {
      return 'Sunny';
    } else if (forecast.toLowerCase().indexOf('storm')) {
      return 'Thunderstorm';
    } else if (forecast.toLowerCase().indexOf('cloudy')) {
      return 'Cloudy';
    } else {
      return 'Clear';
    }
  }
  const forecastData = weeklyForecastData?.forecast?.forecastday;

  return (
    forecastData && (
      <Card className="bg-gray-900">
        <CardHeader className=" bg-black border-4 border-gray-900  text-white">
          <div className="p-4">Seven Day Forecast</div>
        </CardHeader>
        <CardBody className="p-0">
          <div className="xl:flex xl:flex-col md:grid md:grid-cols-2  gap-4 p-4  bg-gray-900 rounded-lg ">
            {forecastData.map((forecast, idx) => (
              <DayForecastItem
                day={sevenDays[idx]}
                forecast={getForecast(forecast['day']['condition']['text'])}
                forecastIcon={forecast.forecastIcon}
                key={forecast.date_epoch}
                maxTemp={forecast['day']['maxtemp_c']}
                minTemp={forecast['day']['mintemp_c']}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    )
  );
}
