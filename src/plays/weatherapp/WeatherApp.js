import React, { useState, useEffect } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

function Faisalplay(props) {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');
  const apiKey = 'c60fc2840593482a76adfdac672e8ee9';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  // useEffect(() => {
  //   const checkInternetConnectivity = async () => {
  //     try {
  //       await fetch('https://www.google.com'); // Make a test request to google.com
  //     } catch (networkError) {
  //       setError('No Internet Connection');
  //       return;
  //     }
  //   };
  //   checkInternetConnectivity();
  // }, []); // Run this effect only once on component mount

  const handleClick = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Make an asynchronous GET request to the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        setCurrentWeatherData(data); // Set the weather data in the state
        setLoading(false);
      })
      .catch((error) => {
        setError('Network error or invalid search');
        setLoading(false);
        console.error('Error:', error); // Log any errors to the console
      });
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div>
            <input
              placeholder="Search any city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)} // Update the cityName state as the user types
            />
            <button onClick={handleClick}>Search</button>

            {loading && <div className="spinner" />}

            {error && <h2 className="error-message">{error}</h2>}

            {currentWeatherData && !loading && !error && (
              <div className="data_div">
                <h2>
                  Weather in {currentWeatherData.name}, {currentWeatherData.sys.country}
                </h2>
                <p>Temperature: {(currentWeatherData.main.temp - 273.15).toFixed(2)} C</p>
                <p>Humidity: {currentWeatherData.main.humidity}%</p>
                <p>Condition: {currentWeatherData.weather[0].main}</p>
                <p>Description: {currentWeatherData.weather[0].description}</p>
                <img
                  alt={currentWeatherData.weather[0].main}
                  src={`https://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faisalplay;
