import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import CityInput from './components/CityInput';
import ForecastData from './components/ForecastData';
import WeatherOutput from './components/WeatherOutput';
import './styles.scss';

function Weather(props) {
  // Your Code Start below.

  const [cityInput, setCityInput] = useState('');
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}

          <div className="flex flex-col items-center min-h-full p-4 rounded-lg weather-container">
            <CityInput
              cityInput={cityInput}
              setCityInput={setCityInput}
              setForecastData={setForecastData}
              setIsLoading={setIsLoading}
              setWeatherDetails={setWeatherDetails}
            />

            {isLoading ? (
              <p className="mt-8 text-sm text-neutral-200">Getting weather details...</p>
            ) : (
              weatherDetails &&
              // City not found
              (weatherDetails.cod === '404' ? (
                <p className="mt-8 text-neutral-200">City not found</p>
              ) : (
                <>
                  <WeatherOutput weatherDetails={weatherDetails} />
                  {forecastData && <ForecastData forecastData={forecastData} />}
                </>
              ))
            )}
          </div>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Weather;
