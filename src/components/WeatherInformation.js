import React from 'react';

const WeatherInformation = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather || weatherData.weather.length === 0) {
    return null; // Render nothing if data is not available yet
  }
   
  // Convert temperature and feelsLike from Celsius to Fahrenheit
  const temperature = Math.round((weatherData.main.temp * 9/5) + 32);
  const feelsLike = Math.round((weatherData.main.feels_like * 9/5) + 32);
  const description = weatherData.weather[0].description;

  const date = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const time = new Date().toLocaleTimeString();
  const location = weatherData.name;
  const country = weatherData.sys.country;

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-8">
      <div>
        <h2 className="text-4xl font-bold mb-2">{temperature}°F</h2>
        <p className="text-lg">Feels Like: {feelsLike}°F</p>
        <p className="text-lg">Description: {description}</p>
        <hr className="border-gray-300 my-4" />
        <div className="text-lg space-y-4">
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Location: {location}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
