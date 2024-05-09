import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import InputBox from './InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

// WARNING: Do not change the entry componenet name
function Currencyconverter(props) {
  // State for input values
  const [from, setFrom] = useState('bdt');
  const [to, setTo] = useState('usd');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency info based on 'from' currency
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Function to swap 'from' and 'to' currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Function to convert currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="play-details">
        {/* Play header */}
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Main Container */}
          <div className="w-full flex flex-wrap justify-around items-center">
            <div className="border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                {/* Input box for 'from' currency */}
                <div className="w-full mb-1">
                  <InputBox
                    amount={amount}
                    currencyOptions={options}
                    label="From"
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={() => setAmount(amount)}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  {/* Button to swap 'from' and 'to' currencies */}
                  <button
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    type="button"
                    onClick={swap}
                  >
                    SWAP
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  {/* Input box for 'to' currency */}
                  <InputBox
                    amountDisable
                    amount={convertedAmount}
                    currencyOptions={options}
                    label="To"
                    selectCurrency={to}
                    onCurrencyChange={(currency) => setTo(currency)}
                  />
                </div>
                {/* Button to initiate currency conversion */}
                <button
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                  type="submit"
                >
                  Convert {from.toUpperCase()} TO {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currencyconverter;
