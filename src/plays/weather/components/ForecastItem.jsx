import { useEffect, useState } from 'react';
import { getWeatherIcon, getWeekDay, getWeekdayIndex } from '../utils';

export default function ForecastItem({ data }) {
  const [weekdayIndex, setWeekdayIndex] = useState(4);

  useEffect(() => {
    setWeekdayIndex(getWeekdayIndex(data.dt));
  }, [data]);

  return (
    <div className="flex items-center gap-4 md:gap-0 md:flex-col">
      <img alt={`Time at ${data.dt}`} src={getWeatherIcon(data.weather[0].icon)} />

      <div className="flex flex-col md:items-center">
        <span className="mt-2 text-sm text-neutral-200">
          {data.main.temp_min} &deg; / {data.main.temp_max} &deg;
        </span>

        <span className="text-sm text-neutral-200">{getWeekDay(weekdayIndex)}</span>
      </div>
    </div>
  );
}
