import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
const SideBarDesign = ({ gradients, setGradientColor, cardColor, setCardColor, gradientColor }) => {
  // Passing the selected background color to the state
  const handleGradientSelection = (selectedGradientColorId) => {
    const selectedGradinet = gradients.filter(
      (gradientColorItem) => gradientColorItem.id === selectedGradientColorId
    );
    setGradientColor(selectedGradinet);
  };

  // Passing the seleced Quote card color to the state
  const handleCardColor = () => {
    if (cardColor === 'Light') {
      setCardColor('Dark');
    } else {
      setCardColor('Light');
    }
  };

  return (
    <section className=" bg-white relative left-4  shadow-xl p-4 flex flex-col items-center gap-6 z-50 w-32 h-[650px] rounded-lg hidden sm:block">
      <div className="flex flex-col items-center">
        <p>Background</p>
        {gradients.map((gradient) => (
          <div
            className={`bg-1  my-1 mt-2 rounded-full cursor-pointer  w-[50px] h-[50px] ${
              gradient.id === gradientColor[0].id ? ' border-4 border-slate-500' : ''
            }`}
            key={gradient.id}
            style={{
              background: `linear-gradient(${gradient.gradient_color1}, ${gradient.gradient_color2})`
            }}
            onClick={() => handleGradientSelection(gradient.id)}
          />
        ))}
        <p className="mt-4">Card Mode</p>
        <div
          className={`rounded-full cursor-pointer border-2 border-slate-600 p-3 mt-2 ${
            cardColor === 'Light' ? 'bg-white' : 'bg-black'
          } `}
          onClick={() => handleCardColor()}
        >
          {cardColor === 'Light' ? (
            <FaSun size={21} />
          ) : (
            <FaMoon className="text-white" size={14} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SideBarDesign;
