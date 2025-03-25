import React, { useState, useEffect } from "react";
import "../styles/weather.css";


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const LAT = 65.0121;
  const LON = 25.4651;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div className="weather-box">
      <h3>Current Weather</h3>
      {weatherData ? (
        <div>
          <p> Temperature: {weatherData.main.temp}°C</p>
          <p> Wind Speed: {weatherData.wind.speed} m/s</p>
          <p> Condition: {weatherData.weather[0].description}</p>
          <p> Humidity: {weatherData.main.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
