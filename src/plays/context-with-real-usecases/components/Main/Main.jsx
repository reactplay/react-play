import Menu from "../Menu";
import RecipeGrid from "./RecipeGrid";
const Main = ({ activeCuisine, activeCuisineHandler, uniqCuisines }) => {
  return (
    <div className="main-container">
      <Menu
        activeCuisine={activeCuisine}
        activeCuisineHandler={activeCuisineHandler}
        uniqCuisines={uniqCuisines}
      />
      <RecipeGrid />
    </div>
  );
};

export default Main;
