import { createContext, useEffect, useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import "./contextWithRealUsecases.css";
import ContextInfoSlider from "./components/ContextInfoSlider";
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import Main from "./components/Main/Main";
import Recipes from "./Recipes";
import CuisineContext from "./context/CuisineContext";

function ContextWithRealUsecases(props) {
  // Your Code Start below.

  const [activeCuisine, setActiveCuisine] = useState(null);

  //slide index
  const [index, setIndex] = useState(0);

  const activeCuisineHandler = (cuisine) => {
    setActiveCuisine(cuisine);
  };

  //get an array of cuisines
  const cuisines = Recipes.map((item) => {
    return item.recipe.cusine;
  });

  //remove duplicate cuisines.
  const uniqCuisines = [...new Set(cuisines)];

  //get recipes filtered by cuisine type
  const recipesByCusine = Recipes.filter(
    (item) => item.recipe.cusine === activeCuisine
  );

  //prev slide
  const handlePrev = () => {
    if (index > 1) {
      setIndex(index - 1);
    } else setIndex(5);
  };

  //next slide
  const handleNext = () => {
    if (index < 5) {
      setIndex(index + 1);
    } else setIndex(1);
  };

  //As the we click the menu, it will change the slider
  useEffect(() => {
    handleNext();
  }, [activeCuisine]);
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="context-with-real-usecases">
            <h1 className="context-with-real-usecases main-heading">
              React Context
            </h1>

            <CuisineContext.Provider
              value={{
                activeCuisine,
                activeCuisineHandler,
                uniqCuisines,
                recipesByCusine,
                index,
                handlePrev,
                handleNext,
              }}
            >
              <ContextInfoSlider />
              <Heading />
              {activeCuisine === null ? <Menu /> : <Main />}
            </CuisineContext.Provider>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ContextWithRealUsecases;
