import { useState } from "react"
import "./App.css"
import { Weather } from "./types"
import { weathers } from "./data"

export default function App() {
    const [city, setCity] = useState<string>("")
    const [weather, setWeather] = useState<Weather | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    return (
        <div className="app">
            <h1>Weather App</h1>
            <div className="search-bar">
                <form onSubmit={(e) => {
                    e.preventDefault();

                    setIsLoading(true)
                    setTimeout(() => {
                        const filteredWeathers = weathers.filter((weather) => weather.city.toLowerCase() === city.toLowerCase());
                        if (filteredWeathers.length > 0) {
                            setWeather(filteredWeathers[0])
                            setError('')
                        } else {
                            setWeather(null)
                            setError('Not Found')
                        }
                        setIsLoading(false)
                    }, 3000);
                }}>
                    <label>
                        <input
                            placeholder="Enter city name"
                            onChange={(e) => setCity(e.target.value)} />
                    </label>
                    <label>
                        <button type="submit">Find</button>
                    </label>
                </form>
            </div>
            <div className="wrapper">
                {isLoading && <div>Loading...</div>}

                {!isLoading && error.length > 0 && <div>{error}</div>}

                {!isLoading && weather != null && <div className="weather">
                    <h3>{weather.city}, {weather.country}</h3>
                    <div className="weather-cond">
                        <img src={`/assets/${weather.icon}@2x.png`} alt={weather.description} />
                        <span>{weather.temp}<sup>&#8451;</sup></span>
                    </div>
                    <div className="weather-detail">
                        <p>{weather.description.toUpperCase()}</p>
                        <p>Wind Speed: {weather.windSpeed}m/s</p>
                        <p>Longitude: {weather.lon}</p>
                        <p>Latitude: {weather.lat}</p>
                    </div>
                </div>}
            </div>
        </div>
    );
}
