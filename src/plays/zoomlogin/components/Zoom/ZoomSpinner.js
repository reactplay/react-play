import React from 'react';

const ZoomSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[6px]">
      <div className="relative w-2 h-2">
        {[...Array(12)].map((_, index) => (
          <div
            className="w-[1px] h-[5px] bg-gray-700 absolute top-1/2 left-1/2 transform origin-bottom-center"
            key={index}
            style={{
              transform: `rotate(${index * 30}deg) translateX(-50%) translateY(-130%)`,
              animation: `bar-fade 1.2s linear infinite`,
              animationDelay: `${index * 0.1}s`,
              opacity: `${(12 - index) / 12}` // Gradually decrease the opacity
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ZoomSpinner;
