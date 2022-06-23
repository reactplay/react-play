import { useState } from "react";
import { getPlayById } from "meta/play-meta-util";
import PlayHeader from "common/playlists/PlayHeader";
import "./contextWithRealUsecases.css";
import ContextInfoSlider from "./components/ContextInfoSlider";
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import Main from "./components/Main/Main";
import Recipes from "./Recipes";

function ContextWithRealUsecases(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [activeCuisine, setActiveCuisine] = useState(null);
  const activeCuisineHandler = (cuisine) => {
    setActiveCuisine(cuisine);
  };
  //get an array of cuisines
  const cuisines = Recipes.map((item) => {
    return item.recipe.cusine;
  });
  const uniqCuisines = [...new Set(cuisines)];

  //get recipes filtered by cuisine type
  const recipesByCusine = Recipes.filter(
    (item) => item.recipe.cusine === activeCuisine
  );
  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="context-with-real-usecases">
            <h1 className="context-with-real-usecases main-heading">
              React Context
            </h1>

            <ContextInfoSlider />
            <Heading activeCuisine={activeCuisine} />

            {activeCuisine === null ? (
              <Menu
                activeCuisineHandler={activeCuisineHandler}
                uniqCuisines={uniqCuisines}
              />
            ) : (
              <Main
                activeCuisine={activeCuisine}
                activeCuisineHandler={activeCuisineHandler}
                uniqCuisines={uniqCuisines}
                recipesByCusine={recipesByCusine}
              />
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ContextWithRealUsecases;
