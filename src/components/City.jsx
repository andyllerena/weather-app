import React, { useEffect, useState } from 'react';
import fetchData from './fetchApi'; // Import fetchData function from your API file
import WeatherInformation from './WeatherInformation';

const City = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchData(city)
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchData(city); // No need to call fetchData here, it's handled in the useEffect
  };

  return (
    <div className="container mx-auto p-4 bg-slate-100">
      <h1 className="flex justify-center text-4xl font-bold mb-8 mt-8">Weather App</h1>
      <div className='flex flex-col items-center'>
      <div className="mb-20">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={city}
                onChange={handleInputChange}
                className="block text-center w-full rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search another location"
                />
            </form>
        </div>

        <h2 className="flex justify-center text-3xl mb-2 font-semibold ">Weather in {weatherData && weatherData.name}</h2>

        {weatherData && (
          <div className='max-w-xl mx-auto'>
            <div className="bg-gray-300 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4 text-indigo-800">Today's Weather</h2>
              <WeatherInformation weatherData={weatherData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default City;
