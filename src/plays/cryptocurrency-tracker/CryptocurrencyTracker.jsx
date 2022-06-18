import { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";
import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./cryptocurrencyTracker.css";

function CryptocurrencyTracker(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="coin-app">
            <div className="coin-search">
              <h1 className="coin-text">Search a currency</h1>
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  className="coin-input"
                  onChange={handleChange}
                ></input>
              </form>
            </div>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              );
            })}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CryptocurrencyTracker;
