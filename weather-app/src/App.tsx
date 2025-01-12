import { Oval } from "react-loader-spinner";
import "./App.css";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import axios from "axios";
import { Weather as WeatherType } from "./Types";
import Error from "./Error";
import ContentWrapper from "./ContentWrapper";
import Weather from "./Weather";
import SearchBar from "./SearchBar";

type WeatherState = {
  loading: boolean;
  data: WeatherType | null;
  error: boolean;
};

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherState>({
    loading: false,
    data: null,
    error: false,
  });

  const handleInputKeyUp = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCity("");
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
      await axios
        .get(url, {
          params: {
            q: city,
            units: "metric",
            appid: apiKey,
          },
        })
        .then((res) => {
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch(() => {
          setWeather({ ...weather, data: null, error: true });
          setCity("");
        });
    }
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>
      <SearchBar
        onInputChange={handleInputChange}
        onInputKeyUp={handleInputKeyUp}
      />
      <ContentWrapper>
        {weather.loading && (
          <Oval visible={true} width={50} height={50} wrapperClass="loading" />
        )}
        {weather.error && <Error />}
        {weather && weather.data && weather.data.main && (
          <Weather
            city={weather.data.name}
            country={weather.data.sys.country}
            windSpeed={weather.data.wind.speed}
            description={weather.data.weather[0].description}
            icon={weather.data.weather[0].icon}
            temp={weather.data.main.temp}
          />
        )}
      </ContentWrapper>
    </div>
  );
}
