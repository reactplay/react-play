import { fetchForecast, WEATHER_API_BASE_URL } from '../utils';

export default function CityInput({
  cityInput,
  setCityInput,
  setWeatherDetails,
  setForecastData,
  setIsLoading
}) {
  const handleCityInput = (e) => {
    setCityInput(e.target.value);
  };

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (cityInput.length === 0) {
      return;
    }

    try {
      // Show loading messae
      setIsLoading(true);

      const res = await fetch(
        `${WEATHER_API_BASE_URL}/weather?q=${cityInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const json = await res.json();

      // Fetch forecast only for valid city name
      if (json.cod !== '404') {
        await fetchForecast(json.coord.lat, json.coord.lon, setForecastData);
      }

      setWeatherDetails(json);

      // Hide loading message
      setIsLoading(false);
    } catch (e) {
      // handle error
    }
  };

  return (
    <form className="w-full md:w-1/3" onSubmit={fetchWeather}>
      <input
        className="w-full p-2 text-sm rounded-lg"
        placeholder="Search your city here..."
        value={cityInput}
        onChange={handleCityInput}
      />
    </form>
  );
}
