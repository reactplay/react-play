import React from "react";
import { SiTailwindcss, SiCss3 } from "react-icons/si";
import toast from "react-hot-toast";

const GradientComponent = ({ index, name, css, tailwind, colors }) => {
  // Function to copy tailwind,css, color to clipboard.This function takes in 2 arguments. One is the text to be copied and the other is the message for the toast.
  // Note:- Initially, there were three functions that executed this task. Later, combined those functions into just one function(the below one) for better practice and efficiency.
  const copyCode = async (codeToCopy, message) => {
    await navigator.clipboard.writeText(codeToCopy);
    toast(`Copied ${message}`, {
      icon: "📋",
      style: {
        backgroundColor: "#010326",
        color: "#00f2fe",
      },
    });
  };

  return (
    // Gradient Component
    <div
      key={index}
      className="group relative h-72 w-[22.5rem] rounded-2xl transition-all duration-150 md:hover:scale-105 border-[6px] border-[#010326]"
      style={{ background: css }}
    >
      {/* component containing buttons to copy code, colors of the gradient */}
      <div className="absolute md:group-hover:flex md:hidden flex right-0 top-0 w-fit rounded-lg rounded-tl-none rounded-br-none bg-[#010326] transition-all duration-200 py-1 px-2 justify-center items-center border-2 border-[#010326]">
        <GradientCopyButton
          handleOnClick={() => copyCode(tailwind, "TailwindCSS")}
        >
          <SiTailwindcss />
        </GradientCopyButton>
        <GradientCopyButton handleOnClick={() => copyCode(css, "CSS")}>
          <SiCss3 />
        </GradientCopyButton>
        {colors.map((color) => (
          <GradientCopyButton handleOnClick={() => copyCode(color, "Color")}>
            <span className="text-sm uppercase">{color}</span>
          </GradientCopyButton>
        ))}
      </div>

      {/* Name of the gradient. Note:- Hoping to add a like button to this same component in the future with justify-between to evenly space the Name on the left and the like button on the right.*/}
      <div class="absolute bottom-0 w-full rounded-b-lg bg-[#010326] py-4 px-6 text-xl font-bold text-white">
        {name}
      </div>
    </div>
  );
};

export default GradientComponent;

// This component is the button for copying the codes, color. Made it a separate component because it used several times and for easy customization.
const GradientCopyButton = ({ children, handleOnClick }) => {
  return (
    <button
      className="flex justify-center items-center text-center p-2 text-gray-300 hover:text-white hover:bg-cyan-700 text-xl hover:bg-opacity-60 rounded-full transition-all duration-200"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
