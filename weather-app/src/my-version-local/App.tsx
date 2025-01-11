import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import Weather from "./Weather";
import { weathers, Weather as WeatherType } from "./data";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <h1 className="app-name">Weather App</h1>
      <div className="search-bar">
        <label>Enter city:&nbsp;</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} />{" "}
        <button
          onClick={() => {
            if (city.length > 0) {
              setIsLoading(true);
              setTimeout(() => {
                const filteredWeather = weathers.filter(
                  (weather) => weather.name.toLowerCase() === city.toLowerCase()
                );
                if (filteredWeather.length > 0) {
                  setData(filteredWeather[0]);
                  setError("");
                } else {
                  setData(null);
                  setError("City not found");
                }
                setIsLoading(false);
              }, 3000);
            }
          }}
        >
          Enter
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : data !== null ? (
        <Weather
          city={data.name}
          country={data.sys.country}
          windSpeed={data.wind.speed}
          description={data.weather[0].description}
          temp={data.main.temp}
          icon={data.weather[0].icon}
        />
      ) : (
        error.length > 0 && <ErrorMessage error={error} />
      )}
    </div>
  );
}
