import React, { useState } from 'react';
import { SiTailwindcss, SiCss3 } from 'react-icons/si';
import { BsFillTriangleFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { debounce } from 'lodash';

const GradientComponent = ({ index, name, css, tailwind, colors }) => {
  // Function to copy tailwind,css, color to clipboard.This function takes in 2 arguments. One is the text to be copied and the other is the message for the toast.
  // Note:- Initially, there were three functions that executed this task. Later, combined those functions into just one function(the below one) for better practice and efficiency.
  const copyCode = async (codeToCopy, message) => {
    await navigator.clipboard.writeText(codeToCopy);
    toast(`Copied ${message}`, {
      icon: '📋',
      style: {
        backgroundColor: '#010326',
        color: '#00f2fe'
      }
    });
  };

  return (
    // Gradient Component
    <div
      className="group relative h-72 w-[22.5rem] rounded-2xl transition-all duration-150 md:hover:scale-105 border-[6px] border-[#010326]"
      key={index}
      style={{ background: css }}
    >
      {/* component containing buttons to copy code, colors of the gradient */}
      <div className="absolute md:group-hover:flex md:hidden flex right-0 top-0 w-fit rounded-lg rounded-tl-none rounded-br-none bg-[#010326] transition-all duration-200 py-1 px-2 justify-center items-center border-2 border-[#010326]">
        <GradientCopyButton
          handleOnClick={() => copyCode(tailwind, 'TailwindCSS')}
          tooltipText="Copy TailwindCSS"
        >
          <SiTailwindcss />
        </GradientCopyButton>
        <GradientCopyButton handleOnClick={() => copyCode(css, 'CSS')} tooltipText="Copy CSS">
          <SiCss3 />
        </GradientCopyButton>
        {colors.map((color) => (
          <GradientCopyButton
            handleOnClick={() => copyCode(color, 'Color')}
            tooltipText="Copy Color"
          >
            <span className="text-sm uppercase font-semibold">{color}</span>
          </GradientCopyButton>
        ))}
      </div>

      {/* Name of the gradient. Note:- Hoping to add a like button to this same component in the future with justify-between to evenly space the Name on the left and the like button on the right.*/}
      <div className="absolute bottom-0 w-full rounded-b-lg bg-[#010326] py-4 px-6 text-xl font-bold text-white">
        {name}
      </div>
    </div>
  );
};

export default GradientComponent;

// This component is the button for copying the codes, color. Made it a separate component because it used several times and for easy customization.
const GradientCopyButton = ({ children, handleOnClick, tooltipText }) => {
  // state variables for setting hover state of button.
  const [isHovered, setIsHovered] = useState(false);

  // onMouseEnter function that passes the event handler into lodash's debounce function to add a delay of 700s and sets setIsHovered to true.
  const handleOnMouseEnter = debounce(() => setIsHovered(true), 700);

  // onMouseLeave function that sets setIsHovered to false and calls the handleOnMouseEnter.cancel() to cancel the calling of the handleOnMouseEnter function.
  const handleOnMouesLeave = () => {
    setIsHovered(false);
    handleOnMouseEnter.cancel();
  };

  return (
    <button
      className="flex p-2 text-gray-300 justify-center hover:text-white hover:bg-cyan-700 text-xl hover:bg-opacity-50 rounded-full transition-all duration-200"
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouesLeave}
    >
      {children}
      {/* Logic that displays a tooltip when hovered. If state variable isHovered is true it is displayed, else it does not. */}
      {isHovered && (
        <p className="absolute inline-flex justify-center z-50 mt-10 w-fit p-2 text-xs bg-cyan-700 rounded-xl">
          <BsFillTriangleFill className="absolute -mt-3 text-cyan-700" />
          {tooltipText}
        </p>
      )}
    </button>
  );
};
