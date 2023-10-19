import { useState } from 'react';

const tips = [
  { tip: 5, isCustom: false },
  { tip: 10, isCustom: false },
  { tip: 15, isCustom: false },
  { tip: 20, isCustom: false },
  { tip: 30, isCustom: false },
  { tip: 0, isCustom: true }
];

const TipAmount = ({ setTip }) => {
  const [customSelected, setCustomSelected] = useState(false);
  const [activeTip, setActiveTip] = useState(null);
  const [customTip, setCustomTip] = useState(0);

  const handleTipClick = (index) => {
    setCustomSelected(false);

    if (activeTip === index) {
      setActiveTip(null);

      return;
    }

    setActiveTip(index);
    setTip(tips[index].tip / 100);
  };

  const handleCustomTip = () => {
    setActiveTip(null);
    setCustomSelected(true);
    setTip(customTip / 100);
  };

  const handleCustomTipBlur = () => {
    setTip(customTip / 100);
    if (customTip > 0) return;
    setCustomSelected(false);
  };

  return (
    <div>
      <label className="block font-serif text-sm font-light leading-6 text-gray-600" htmlFor="tip">
        Select Tip in %
      </label>

      <div className="mt-2 grid grid-cols-3 gap-3">
        {tips.map((tip, index) => (
          <div key={index}>
            {tip.isCustom ? (
              <>
                {customSelected ? (
                  <input
                    aria-describedby="tip-amount"
                    className="block h-full w-full rounded-md border-0 px-2 py-1.5 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    id="tip"
                    name="tip"
                    placeholder="0.00"
                    type="number"
                    value={customTip}
                    onBlur={handleCustomTipBlur}
                    onChange={(e) => setCustomTip(e.target.value)}
                  />
                ) : (
                  <button
                    className="w-full rounded-md bg-gray-100 px-3.5 py-2.5 font-medium text-cyan-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    type="button"
                    onClick={handleCustomTip}
                  >
                    Custom
                  </button>
                )}
              </>
            ) : (
              <button
                className={`${
                  index === activeTip
                    ? 'bg-cyan-200 text-cyan-700 hover:bg-cyan-100'
                    : 'bg-cyan-600 text-white hover:bg-cyan-500'
                } w-full rounded-md px-3.5 py-2.5 shadow-sm file:font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600`}
                type="button"
                onClick={() => handleTipClick(index)}
              >
                {tip.tip}%
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipAmount;
