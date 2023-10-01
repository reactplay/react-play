import { Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const API_KEY = '7c2e570aa4d54b9ab9290109232809';

const WEATHER_API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=`;

export function SearchBar({ getWeatherData }) {
  const [searchText, setSearchText] = useState('');
  const [errorText, setErrorText] = useState('');

  function inputChangeHandler(e) {
    setSearchText(e.target.value);
    // console.log(searchText);
  }
  useEffect(
    function getWeatherDataFromAPI() {
      if (searchText && searchText.length > 3) {
        fetch(WEATHER_API_URL + searchText)
          .then((response) => response.json())
          .then((respJson) => {
            // console.log("respJson: ", respJson);
            if (respJson && !respJson['error']) {
              getWeatherData(respJson?.location?.name, respJson);
              setErrorText('');
            } else {
              setErrorText('No matching location found');
            }
          });
      }
    },
    [searchText]
  );

  return (
    <div className="w-96">
      <Input
        className="text-white"
        label="Search for cities"
        value={searchText}
        variant="outlined"
        onChange={inputChangeHandler}
      />
      <p className="text-center text-black-400 bg-red-500 rounded px-1">{errorText}</p>
    </div>
  );
}
