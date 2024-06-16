import React from 'react';
import './Weather.css';

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h2>{data.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels Like: {data.main.feels_like}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Pressure: {data.main.pressure} hPa</p>
      <p>Visibility: {data.visibility / 1000} km</p>
    </div>
  );
};

export default Weather;
