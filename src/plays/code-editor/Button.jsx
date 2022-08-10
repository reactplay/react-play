import React from "react";

const Button = ({ title, backgroundColor, border, onClick }) => {
  return (
    <div>
      <button
        style={{
          maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px",
          backgroundColor: backgroundColor,
          border: border
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
