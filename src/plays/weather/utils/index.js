export const getWeatherIcon = (iconCode, size = "") => {
  let base = `https://openweathermap.org/img/wn/${iconCode}`;
  if (size === "lg") {
    base += "@2x";
  }
  base += ".png";
  return base;
};

export const getWeekDay = (index) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return days[index];
};

export const getWeekdayIndex = (date) => {
  return new Date(date * 1000).getDay();
};
