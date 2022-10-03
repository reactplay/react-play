export default function WeatherDetail({ icon, value, unit }) {
  return (
    <div>
      {icon}
      <span>
        <strong>{value}</strong> {unit}
      </span>
    </div>
  );
}
