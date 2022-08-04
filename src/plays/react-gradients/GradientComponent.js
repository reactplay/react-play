import React from "react";

const GradientComponent = ({ name, css, tailwind }) => {
  return (
    <div className="w-64 h-fit rounded-xl">
      <div className="w-full h-56 rounded-xl" style={{ background: css }}></div>
      <div className="w-full h-14 rounded-xl">{name}</div>
    </div>
  );
};

export default GradientComponent;
