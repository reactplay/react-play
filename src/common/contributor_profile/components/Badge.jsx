import React from "react";

const Badge = ({ count = 0 }) => {
  return (
    <div
      className="ml-2 bg-slate-300 w-6 h-6 rounded-xl 
    text-stone-500 flex items-center justify-center"
    >
      {count}
    </div>
  );
};

export default Badge;
