import React from 'react';

const Button = ({ title, backgroundColor, border, onClick }) => {
  return (
    <div>
      <button
        className="code-editor-btn"
        style={{
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
