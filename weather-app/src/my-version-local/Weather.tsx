export default function Weather({
  city,
  country,
  description,
  temp,
  windSpeed,
  icon,
}: {
  city: string;
  country: string;
  description: string;
  temp: number;
  windSpeed: number;
  icon: string;
}) {
  return (
    <div>
      <div className="city-name">
        <h2>
          {city}, <span>{country}</span>
        </h2>
      </div>
      <div className="date">{new Date().toDateString()}</div>
      <div className="icon-temp">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        {temp}
        <sup>°C</sup>
      </div>
      <div className="des-wind">
        <p>{description}</p>
        <p>Wind Speed: {windSpeed}m/s</p>
      </div>
    </div>
  );
}
