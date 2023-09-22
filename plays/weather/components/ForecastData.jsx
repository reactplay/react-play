import ForecastItem from './ForecastItem';

export default function ForecastData({ forecastData }) {
  return (
    <div className="flex flex-col justify-center gap-8 mt-12 md:flex-row">
      {forecastData.list
        // Filter is done to get the forecast from the next day
        .filter((_, index) => (index + 1) % 8 === 0)
        .map((data) => (
          <ForecastItem data={data} key={data.dt} />
        ))}
    </div>
  );
}
