import { useState } from "react";

const Menu = ({ activeCuisine, activeCuisineHandler, uniqCuisines }) => {
  return (
    <div className="menu-container">
      {uniqCuisines.map((cuisine, index) => {
        return (
          <div
            className={`menu-item ${cuisine === activeCuisine ? "active" : ""}`}
            onClick={() => activeCuisineHandler(cuisine)}
          >
            {cuisine}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
