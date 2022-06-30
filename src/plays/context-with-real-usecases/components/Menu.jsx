import CuisineContext from "../context/CuisineContext";
import { useContext } from "react";
const Menu = () => {
  const { activeCuisine, activeCuisineHandler, uniqCuisines } =
    useContext(CuisineContext);
  return (
    <div className="menu-container">
      {uniqCuisines.map((cuisine, index) => {
        return (
          <div
            key={index}
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
