import { useContext, useState } from "react";
import CuisineContext from "../context/CuisineContext";
const CuisineModal = () => {
  const { recipesByCusine } = useContext(CuisineContext);
  const [display, setDisplay] = useState("hidden");
  const toggleDisplay = () => {
    setDisplay(display === "hidden" ? "active" : "hidden");
  };
  return (
    <div className="cuisine-modal">
      <button className="btn-cuisine-modal" onClick={toggleDisplay}>
        Cusine facts
      </button>
      <div className={`modal-overlay ${display}`}>
        <div className={`modal-container ${display}`}>
          <div className="btn-group">
            <button onClick={toggleDisplay} className="btn-close">
              X
            </button>
          </div>
          <div className="modal-fatcs">
            <ul>
              {recipesByCusine.map((item, index) => {
                return (
                  <li className="cuisine-list" key={index}>
                    {item.recipe.randomfact}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisineModal;
