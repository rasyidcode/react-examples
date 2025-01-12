import { getTodayString } from "./utils";

export default function Weather({
  city,
  country,
  icon,
  description,
  temp,
  windSpeed,
}: {
  city: string;
  country: string;
  icon: string;
  description: string;
  temp: number;
  windSpeed: number;
}) {
  return (
    <div>
      <div className="city-name">
        <h2>
          {city}, {country}
        </h2>
      </div>
      <div className="date">{getTodayString()}</div>
      <div className="icon-temp">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        {Math.round(temp)}
        <sup className="deg">°C</sup>
      </div>
      <div className="des-wind">
        <p>{description.toUpperCase()}</p>
        <p>Wind Speed: {windSpeed}m/s</p>
      </div>
    </div>
  );
}
