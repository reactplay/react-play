import React from 'react';

const DisplayCard = (props) => {
  const { reset, tipPerPerson, totalPerPerson, total } = props;

  const data = [
    {
      label: 'Tip Amount',
      value: tipPerPerson.toFixed(2)
    },
    {
      label: 'Total',
      value: totalPerPerson.toFixed(2)
    }
  ];

  return (
    <div className="flex flex-col justify-between rounded-xl bg-cyan-700 p-5 lg:py-10">
      <div className="flex flex-col gap-y-8">
        {data.map((item, i) => (
          <div className="flex items-end justify-between" key={i}>
            <div>
              <p className="font-serif text-white lg:text-lg">{item.label}</p>
              <p className="font-serif text-xs font-light text-gray-300 lg:text-sm">/ person</p>
            </div>
            <div className="flex items-baseline gap-x-2">
              <span className="text-xl font-extralight text-white lg:text-xl">₹</span>
              <span className="font-serif text-3xl font-medium text-white lg:text-4xl">
                {item.value}
              </span>
            </div>
          </div>
        ))}

        <div className="flex items-end justify-between">
          <p className="font-serif font-medium text-white lg:text-lg">Total Bill</p>

          <div className="flex items-baseline gap-x-2">
            <span className="text-xl font-extralight text-white lg:text-2xl">₹</span>
            <span className="font-serif text-4xl font-medium text-white lg:text-5xl">
              {total?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <button
        className="mt-14 w-full rounded-md bg-cyan-200 px-3.5 py-2.5 text-lg font-semibold uppercase tracking-wide text-cyan-700 shadow-sm hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        type="submit"
        onClick={(e) => reset(e)}
      >
        Reset Tip
      </button>
    </div>
  );
};

export default DisplayCard;
