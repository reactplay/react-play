import React, { useEffect, useState } from "react";
import data from "./test";

export default function Country({ activeGeo }) {
  console.log(data);
  const [country, setCountry] = useState(data);
  const [isloading, setIsLoading] = useState(false);
  // const getCountry = () => {
  //   setIsLoading(true);
  //   fetch(`https://restcountries.com/v3.1/alpha/${activeGeo}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsLoading(false);
  //       setCountry(data);
  //     })
  //     .catch((error) => console.log(error));
  // };
  // useEffect(() => {
  //   getCountry();
  // }, [activeGeo]);
  console.log(country);
  return (
    <div className="w-[100%] xl:w-[40%] my-8">
      {isloading ? (
        <h1 className="my-12  text-center text-3xl font-bold text-cyan-800">
          Loading....
        </h1>
      ) : (
        <div className="w-[100%] mx-auto">
          {country.map((country, index) => {
            return (
              <div key={index}>
                <h1 className="text-5xl font-bold text-center uppercase">
                  {country.name.common}
                </h1>
                <div>
                  <img
                    src={country.flags.png}
                    className="w-[350px] h-[200px] my-2 mx-auto"
                  />
                  <div className="w-[350px] mx-auto  p-4">
                    <div className="flex m-1">
                      <div className="w-[120px] text-xl font-semibold capitalize ">
                        Capital
                      </div>
                      <div className="text-xl w-[200px]">
                        {country.capital[0]}
                      </div>
                    </div>
                    <div className="flex m-1">
                      <div className="w-[120px] text-xl font-semibold capitalize ">
                        Currency
                      </div>
                      <div className="text-xl w-[200px]">
                        {Object.keys(country.currencies).map(
                          (currency, index) => {
                            return (
                              <span className="bg-lime-600 text-white px-1 rounded m-1">
                                {currency}
                              </span>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="flex m-1">
                      <div className="w-[120px] text-xl font-semibold capitalize">
                        Population
                      </div>
                      <div className="text-xl w-[200px] ">
                        {country.population}
                      </div>
                    </div>
                    <div className="flex m-1">
                      <div className="w-[120px] text-xl font-semibold capitalize ">
                        Latlang
                      </div>
                      <div className="text-xl w-[200px]">
                        {country.latlng.map((item, index) => {
                          return <span key={index}>{item},</span>;
                        })}
                      </div>
                    </div>
                    <div className="flex m-1">
                      <div className="w-[120px] text-xl font-semibold capitalize ">
                        Language
                      </div>
                      <div className="text-xl w-[200px]">
                        {Object.entries(country.languages).map(
                          (language, index) => {
                            return (
                              <span
                                key={index}
                                className="bg-lime-600 text-white px-1 rounded m-1"
                              >
                                {language[1]}
                              </span>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="flex m-1">
                      <div className="w-[120px] text-xl font-semibold capitalize">
                        Area
                      </div>
                      <div className="text-xl w-[200px] ">{country.area}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
