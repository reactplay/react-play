import React, { useEffect, useState } from "react";

export default function CountriesGrid() {
  const [countries, setCounteries] = useState([]);
  const [search, SetSearch] = useState("");
  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCounteries(data));
  };
  const handleChange = (e) => {
    SetSearch(e.target.value);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="my-4 ">
      <div className="grid grid-cols-3 gap-4">
        {countries.map((country, index) => {
          return (
            <div key={index} className="w-[200px] border">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-36"
              />
              <div className="mx-2">
                <h3 className="my-2 text-xl font-bold">
                  {country.name.common}
                </h3>
                <div className="flex">
                  <h4 className="font-semibold">Population :</h4>
                  <div className="mx-1">{country.population}</div>
                </div>
                <div className="flex">
                  <h4 className="font-semibold">Capital :</h4>
                  <div className="mx-1">{country.capital}</div>
                </div>
                <div className="country-info-row">
                  <h4 className="font-semibold">Currency :</h4>
                  <div>{}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
