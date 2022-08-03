import React, { useEffect, useState } from "react";

export default function Country({ activeGeo }) {
  const [country, setCountry] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const getCountry = () => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha/${activeGeo}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setErrorInfo(null);
        setCountry(data[0]);
      })
      .catch((e) => {
        setIsLoading(false);
        setCountry();
        setErrorInfo(e.message);
      });
  };
  useEffect(() => {
    getCountry();
  }, [activeGeo]);
  return (
    <div className="w-[100%] xl:w-[40%] my-8">
      {errorInfo && (
        <h1 className="my-12  text-center text-xl md:text-3xl font-bold text-red-300">
          {errorInfo}
        </h1>
      )}
      {isloading ? (
        <h1 className="my-12  text-center text-xl md:text-3xl font-bold text-cyan-800">
          Loading....
        </h1>
      ) : (
        country && (
          <div className="w-[100%] mx-auto">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-center uppercase">
                {country.name.common}
              </h1>
              <div className="md:flex md:w-[70%] md:mx-auto  xl:block">
                <img
                  src={country.flags.png}
                  className="w-[350px] h-[200px] my-2 mx-auto md:mt-6"
                />
                <div className="w-[350px] md:w-[500px] xl:w-[350px]  mx-auto  p-4">
                  <div className="flex m-1">
                    <div className="w-[120px] text-xl font-semibold capitalize ">
                      Capital
                    </div>
                    <div className="text-xl w-[200px] break-words">
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
                            <span
                              key={index}
                              className="bg-lime-600 text-white px-1 rounded m-1"
                            >
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
                    <div className="text-xl w-[200px] md:w-[400px]">
                      {Object.entries(country.languages).map(
                        (language, index) => {
                          return (
                            <span
                              key={index}
                              className="inline-block bg-lime-600 text-white px-1 rounded m-2 "
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
                  <div className="flex m-1">
                    <div className="w-[120px] text-xl font-semibold capitalize ">
                      TimeZone
                    </div>
                    <div className="text-xl w-[200px] overflow-none break-words">
                      {country.timezones}
                    </div>
                  </div>
                  <div className="flex m-1">
                    <div className="w-[120px] text-xl font-semibold capitalize ">
                      Region
                    </div>
                    <div className="text-xl w-[200px]">{country.subregion}</div>
                  </div>
                  <div className="flex m-1">
                    <div className="w-[120px] text-xl font-semibold capitalize ">
                      Idd
                    </div>
                    <div className="text-xl w-[200px]">
                      {Object.entries(country.idd).map((item, index) => {
                        return (
                          <span key={index} className="inline-block">
                            {item[1]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
