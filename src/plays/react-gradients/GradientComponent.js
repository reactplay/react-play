import React from "react";
import { SiTailwindcss, SiCss3 } from "react-icons/si";
import toast from "react-hot-toast";

const GradientComponent = ({ index, name, css, tailwind, colors }) => {
  // function to copy TailwindCSS code of a specific gradient
  const copyTailwind = async () => {
    await navigator.clipboard.writeText(tailwind);

    // Calling react-hot-toast after copying
    toast("Copied TailwindCSS", {
      icon: "📋",
      style: {
        backgroundColor: "#010326",
        color: "#00f2fe",
      },
    });
  };

  // function to copy CSS code of a specific gradient
  const copyCSS = async () => {
    await navigator.clipboard.writeText(css);

    // Calling react-hot-toast after copying
    toast("Copied CSS", {
      icon: "📋",
      style: {
        backgroundColor: "#010326",
        color: "#00f2fe",
      },
    });
  };

  // function to copy each color of a specific gradient
  const copyColor = async (colorToCopy) => {
    await navigator.clipboard.writeText(colorToCopy);

    // Calling react-hot-toast after copying
    toast("Copied Color", {
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
      className="group relative h-72 w-[22rem] rounded-2xl transition-all duration-150 md:hover:scale-105 border-[6px] border-[#010326]"
      style={{ background: css }}
    >
      {/* component containing buttons to copy code, colors of the gradient */}
      <div className="absolute md:group-hover:flex md:hidden flex right-0 top-0 w-fit rounded-lg rounded-tl-none rounded-br-none bg-[#010326] transition-all duration-200 p-1 justify-center items-center border-2 border-[#010326]">
        <GradientCopyButton handleOnClick={copyTailwind}>
          <SiTailwindcss />
        </GradientCopyButton>
        <GradientCopyButton handleOnClick={copyCSS}>
          <SiCss3 />
        </GradientCopyButton>
        {colors.map((color) => (
          <GradientCopyButton handleOnClick={() => copyColor(color)}>
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
      className="flex justify-center items-center text-center mx-1 p-2 text-gray-300 hover:text-white hover:bg-cyan-700 text-xl hover:bg-opacity-60 rounded-full transition-all duration-200"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
