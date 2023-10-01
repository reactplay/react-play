import React from 'react';
import { SevenDayForecast } from './SevenDayForecast';

export function RightSection({ city }) {
  // console.log(city);
  return <div>{city && <SevenDayForecast city={city} />}</div>;
}
