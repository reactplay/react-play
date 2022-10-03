import { useEffect, useState } from "react";
import { getWeatherIcon, getWeekDay, getWeekdayIndex } from "../utils";

export default function ForecastItem({ data }) {
  const [weekdayIndex, setWeekdayIndex] = useState(4);

  useEffect(() => {
    setWeekdayIndex(getWeekdayIndex(data.dt));
  }, [data]);

  return (
    <div className="flex flex-col items-center">
      <img
        src={getWeatherIcon(data.weather[0].icon)}
        alt={`Time at ${data.dt}`}
      />

      <span className="mt-2 text-sm text-neutral-200">
        {data.main.temp_min} &deg; / {data.main.temp_max} &deg;
      </span>

      <span className="text-sm text-neutral-200">
        {getWeekDay(weekdayIndex)}
      </span>
    </div>
  );
}
