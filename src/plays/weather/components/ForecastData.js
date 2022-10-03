import ForecastItem from "./ForecastItem";

export default function ForecastData({ forecastData }) {
  return (
    <div className="flex justify-center gap-8 mt-12">
      {forecastData.list
        // Filter is done to get the forecast from the next day
        .filter((_, index) => (index + 1) % 8 === 0)
        .map((data) => (
          <ForecastItem data={data} />
        ))}
    </div>
  );
}
