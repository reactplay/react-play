import Menu from "../Menu";
import RecipeGrid from "./RecipeGrid";
const Main = ({
  activeCuisine,
  activeCuisineHandler,
  uniqCuisines,
  recipesByCusine,
}) => {
  return (
    <div className="main-container">
      <Menu
        activeCuisine={activeCuisine}
        activeCuisineHandler={activeCuisineHandler}
        uniqCuisines={uniqCuisines}
      />
      <RecipeGrid recipesByCusine={recipesByCusine} />
    </div>
  );
};

export default Main;
