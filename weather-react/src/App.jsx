import React, { useState } from 'react';
import Weather from './Weather';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '412c6fc197bba66aadf429e7e1a835f2'; 

  const fetchWeather = async () => {
    if (city) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setWeather(null);
      }
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p className="error">{error}</p>}
      {weather && <Weather data={weather} />}
    </div>
  );
};

export default App;