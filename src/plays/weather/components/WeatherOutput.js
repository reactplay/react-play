import { WiHumidity, WiStrongWind, WiUmbrella } from 'react-icons/wi';
import { getWeatherIcon } from '../utils';
import WeatherDetail from './WeatherDetail';

export default function WeatherOutput({ weatherDetails }) {
  return (
    <section>
      <div className="flex flex-col items-center mt-8 text-sm text-neutral-200">
        <h1>
          Right now in <strong className="text-neutral-100">{weatherDetails.name}</strong>, it's{' '}
          {weatherDetails.weather[0].description}.
          {/* <h1>{new Date(weatherDetails.dt * 1000).toLocaleString()}</h1> */}
        </h1>
      </div>

      <div className="flex flex-col items-center gap-8 mt-8 md:items-start md:flex-row md:gap-16">
        <img src={getWeatherIcon(weatherDetails.weather[0].icon, 'lg')} alt="icon" />

        <div className="flex flex-col items-center">
          <h3 className="text-6xl text-white">{weatherDetails.main.temp}</h3>
          <span className="mt-2 text-sm text-neutral-200">
            {weatherDetails.main.temp_min} &#8451; / {weatherDetails.main.temp_max} &#8451;
          </span>
        </div>

        <div className="flex flex-col gap-6 text-neutral-200 weather-report">
          <WeatherDetail icon={<WiHumidity />} value={weatherDetails.main.humidity} unit="%" />
          <WeatherDetail icon={<WiUmbrella />} value={weatherDetails.clouds.all} unit="%" />
          <WeatherDetail icon={<WiStrongWind />} value={weatherDetails.wind.speed} unit="mps" />
        </div>
      </div>
    </section>
  );
}
