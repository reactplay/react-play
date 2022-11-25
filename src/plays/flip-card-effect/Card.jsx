import React, { useState } from "react";

function Card(item) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="card-container">
      <div
        className={`item front ${clicked ? "rotate-180" : ""}`}
        onClick={handleClick}
      ></div>
      <div
        className={`item back ${clicked ? "rotate-360" : ""}`}
        onClick={handleClick}
      >
        {item.item}
      </div>
    </div>
  );
}

export default Card;
