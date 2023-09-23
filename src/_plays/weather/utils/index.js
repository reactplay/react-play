export const getWeatherIcon = (iconCode, size = '') => {
  let base = `https://openweathermap.org/img/wn/${iconCode}`;
  if (size === 'lg') {
    base += '@2x';
  }
  base += '.png';

  return base;
};

export const getWeekDay = (index) => {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  return days[index];
};

export const getWeekdayIndex = (date) => {
  return new Date(date * 1000).getDay();
};

export const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchForecast = async (lat, long, setForecastData) => {
  try {
    const res = await fetch(
      `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    setForecastData(data);
  } catch (_e) {
    // handle error
  }
};
