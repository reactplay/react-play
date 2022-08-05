import React from "react";

const GradientComponent = ({ name, css, tailwind }) => {
  return (
    <div
      class="relative h-64 w-80 rounded-xl transition-all duration-150 hover:scale-105"
      style={{ background: css }}
    >
      <div class="absolute right-4 top-4 w-0 rounded-xl bg-[#010326] py-1 px-3 text-center transition-all duration-150 hover:w-32">
        <span>x</span>
      </div>
      <div class="absolute bottom-0 w-full rounded-b-xl bg-[#010326] py-5 px-6 text-lg font-bold text-black">
        {name}
      </div>
    </div>
  );
};

export default GradientComponent;
