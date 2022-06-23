const RecipeGrid = ({ recipesByCusine }) => {
  return (
    <div className="recipe-grid">
      {recipesByCusine.map((item) => {
        return (
          <div className="recipe-card">
            <img src={item.recipe.url} className="recipe-image" />
            <div className="recipe-info">
              <div className="recipe-info-row">
                <h1 className="title">{item.recipe.title}</h1>
                <div
                  className={`${
                    item.recipe.vegan == "veg" ? "veg" : "non-veg"
                  }`}
                >
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
