import CuisineContext from 'plays/context-with-real-usecases/context/CuisineContext';
import { useContext } from 'react';
const RecipeGrid = () => {
  const { recipesByCusine } = useContext(CuisineContext);

  return (
    <div className="recipe-grid">
      {recipesByCusine.map((item, index) => {
        return (
          <div className="recipe-card" key={index}>
            <img alt={item.recipe.title} className="recipe-image" src={item.recipe.url} />
            <div className="recipe-info">
              <div className="recipe-info-row">
                <h1 className="title">{item.recipe.title}</h1>
                <div className={`${item.recipe.vegan === 'veg' ? 'veg' : 'non-veg'}`}>
                  {item.recipe.vegan}
                </div>
              </div>
              <div className="recipe-info-row">
                <div>{item.recipe.mealtype}</div>
                <div>{item.recipe.cusine}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeGrid;
