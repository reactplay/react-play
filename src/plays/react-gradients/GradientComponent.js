import React from "react";

const GradientComponent = ({ name, css, tailwind }) => {
  return (
    <div className="w-64 h-fit rounded-3xl">
      <div
        className="w-full h-56 rounded-3xl"
        style={{ background: css }}
      ></div>
      <div className="w-full h-14 rounded-3xl">{name}</div>
    </div>
  );
};

export default GradientComponent;
