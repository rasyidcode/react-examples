import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Oval } from "react-loader-spinner";
import "./App.css";
import { KeyboardEvent, useState } from "react";
import axios from "axios";
import { Weather } from "./Types";
import { getTodayString } from "./utils";

type WeatherState = {
  loading: boolean;
  data: Weather | null;
  error: boolean;
};

export default function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState<WeatherState>({
    loading: false,
    data: null,
    error: false,
  });

  const search = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInput("");
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
      await axios
        .get(url, {
          params: {
            q: input,
            units: "metric",
            appid: apiKey,
          },
        })
        .then((res) => {
          console.log("res", res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: null, error: true });
          setInput("");
          console.log("error", error);
        });
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          name="query"
          placeholder="Enter city name..."
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={search}
        />
      </div>
      <div className="content">
        {weather.loading && (
          <Oval visible={true} width={50} height={50} wrapperClass="loading" />
        )}
        {weather.error && (
          <span className="error-message">
            <FontAwesomeIcon icon={faFrown} />
            <span style={{ fontSize: "20px", marginLeft: "1rem" }}>
              City not found
            </span>
          </span>
        )}
        {weather && weather.data && weather.data.main && (
          <div>
            <div className="city-name">
              <h2>
                {weather.data.name}, {weather.data.sys.country}
              </h2>
            </div>
            <div className="date">{getTodayString()}</div>
            <div className="icon-temp">
              <img
                src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                alt={weather.data.weather[0].description}
              />
              {Math.round(weather.data.main.temp)}
              <sup className="deg">°C</sup>
            </div>
            <div className="des-wind">
              <p>{weather.data.weather[0].description.toUpperCase()}</p>
              <p>Wind Speed: {weather.data.wind.speed}m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
